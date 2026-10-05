/* Tejer la red - service worker
   Guarda una copia del sitio para usarlo sin conexion. */
var CACHE='tejer-la-red-v2-0-final-20261005';
var BASICOS=[
 './','./index.html','./estilo.css?v=trama-abierta-1','./manifest.webmanifest?v=azul-1',
 './tejer-la-red/','./tejer-la-red/index.html',
 './recursos/','./recursos/index.html',
 './temas/','./temas/index.html',
 './icono-192.png','./icono-512.png','./marca-tejer-la-red.png','./marca-intro-base.png','./logo-trama-abierta-macrame.webp?v=1',
 './favicon.ico','./favicon-32.png','./favicon-64.png',
 './tejer-la-red/Tejer_la_red_cuadernillo_v2.pdf',
 './icono-mascara-512.png',
 './comunicacion/','./comunicacion/index.html','./comunicacion/gracias.html',
 './configuracion-comunidad.js','./comunidad.css','./estadisticas.js','./comunicacion/comunicacion.js'
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
 if(url.origin!==location.origin)return;   /* nunca intercepta museos, video, chat, correo ni estadísticas */
 /* Los documentos se consultan primero en la red para no conservar una
    interfaz anterior. La copia local queda como respaldo sin conexión. */
 if(req.mode==='navigate'||req.destination==='document'||url.pathname==='/configuracion-comunidad.js'){
  ev.respondWith(
   fetch(req,{cache:'no-store'}).then(function(resp){
    if(resp&&resp.status===200){var copia=resp.clone();caches.open(CACHE).then(function(c){c.put(req,copia);});}
    return resp;
   }).catch(function(){
    return caches.match(req).then(function(guardada){
     if(guardada)return guardada;
     return req.mode==='navigate'||req.destination==='document'?caches.match('./index.html'):new Response('Recurso no disponible sin conexión',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
    });
   })
  );
  return;
 }
 ev.respondWith(
  caches.match(req).then(function(guardada){
   var red=fetch(req).then(function(resp){
    if(resp&&resp.status===200){var copia=resp.clone();caches.open(CACHE).then(function(c){c.put(req,copia);});}
    return resp;
   }).catch(function(){return guardada||new Response('Recurso no disponible sin conexión',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});});
   return guardada||red;
  })
 );
});
