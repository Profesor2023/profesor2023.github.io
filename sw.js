/* Tejer la red - service worker
   Guarda una copia del sitio para usarlo sin conexion. */
var CACHE='tejer-la-red-v1-6';
var BASICOS=[
 './','./index.html','./estilo.css','./manifest.webmanifest',
 './tejer-la-red/','./tejer-la-red/index.html',
 './recursos/','./recursos/index.html',
 './temas/','./temas/index.html',
 './icono-192.png','./icono-512.png',
 './tejer-la-red/Materiales_uso_sin_conexion.pdf'
];
self.addEventListener('install',function(ev){
 ev.waitUntil(caches.open(CACHE).then(function(c){
  return Promise.all(BASICOS.map(function(u){return c.add(u).catch(function(){});}));
 }).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(ev){
 ev.waitUntil(caches.keys().then(function(claves){
  return Promise.all(claves.map(function(k){return k===CACHE?null:caches.delete(k);}));
 }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(ev){
 var req=ev.request;
 if(req.method!=='GET')return;
 var url=new URL(req.url);
 if(url.origin!==location.origin)return;   /* nunca intercepta museos ni video */
 ev.respondWith(
  caches.match(req).then(function(guardada){
   var red=fetch(req).then(function(resp){
    if(resp&&resp.status===200){var copia=resp.clone();caches.open(CACHE).then(function(c){c.put(req,copia);});}
    return resp;
   }).catch(function(){return guardada||caches.match('./index.html');});
   return guardada||red;
  })
 );
});
