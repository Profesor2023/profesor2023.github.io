(function(){
 'use strict';
 var options=window.TejerComunidad&&window.TejerComunidad.estadisticas;
 var panel=document.querySelector('[data-stats]');
 if(!panel)return;
 var status=panel.querySelector('[data-stats-status]');
 var allow=panel.querySelector('[data-stats-allow]');
 var revoke=panel.querySelector('[data-stats-revoke]');
 var consentKey='tejer-stats-consent';
 var consent=false,pixel=null,request=null,generation=0;
 try{consent=localStorage.getItem(consentKey)==='si';}catch(e){}
 var configured=options&&options.activas===true&&/^[a-z0-9][a-z0-9-]{0,59}$/.test(options.codigoGoatCounter);
 if(!configured){status.textContent='Conteo de visitas: no activo.';return;}
 var endpoint='https://'+options.codigoGoatCounter+'.goatcounter.com';
 var path=options.ruta||'/visita-sitio';
 function remember(value){try{localStorage.setItem(consentKey,value?'si':'no');}catch(e){}}
 function controls(){allow.hidden=consent;revoke.hidden=!consent;}
 function stop(){generation++;if(request){request.abort();request=null;}if(pixel){pixel.onload=null;pixel.onerror=null;pixel.remove();pixel=null;}}
 function count(){
  controls();
  if(!consent){status.textContent='Conteo opcional. Tu visita no se registra mediante GoatCounter.';return;}
  if(navigator.onLine===false){status.textContent='Sin conexión: no se envió ninguna visita. El permiso sigue guardado en este navegador.';return;}
  var current=++generation;
  status.textContent='Consultando el conteo de visitas…';
  pixel=document.createElement('img');pixel.width=1;pixel.height=1;pixel.alt='';pixel.hidden=true;pixel.referrerPolicy='no-referrer';
  pixel.onerror=function(){if(current!==generation)return;status.textContent='No se pudo conectar con el contador. El recurso sigue disponible.';};
  pixel.onload=function(){
   if(current!==generation||!consent)return;
   request=new AbortController();
   var timeout=setTimeout(function(){if(request)request.abort();},10000);
   fetch(endpoint+'/counter/'+encodeURIComponent(path)+'.json',{signal:request.signal,cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer'})
   .then(function(r){if(!r.ok)throw new Error('No hay total disponible');return r.json();})
   .then(function(data){if(current!==generation||!consent)return;if(typeof data.count!=='string'&&typeof data.count!=='number')throw new Error('Total inválido');status.textContent='Visitas aproximadas: '+data.count+'. El total público puede demorar hasta cuatro horas en actualizarse.';})
   .catch(function(){if(current===generation&&consent)status.textContent='Conteo permitido. El total público no está disponible en este momento.';})
   .finally(function(){clearTimeout(timeout);if(current===generation)request=null;});
  };
  pixel.src=endpoint+'/count?p='+encodeURIComponent(path)+'&t=Visitas%20al%20sitio%20Tejer%20la%20red&r=&rnd='+Date.now();
  panel.appendChild(pixel);
 }
 allow.addEventListener('click',function(){consent=true;remember(true);stop();count();});
 revoke.addEventListener('click',function(){consent=false;remember(false);stop();controls();status.textContent='Permiso retirado. No se enviarán nuevas visitas desde este navegador; los totales agregados anteriores permanecen.';});
 var clear=document.getElementById('reset-prefs');
 if(clear)clear.addEventListener('click',function(){consent=false;try{localStorage.removeItem(consentKey);}catch(e){}stop();controls();status.textContent='Permiso de conteo retirado.';});
 window.addEventListener('online',function(){if(consent&&!pixel)count();});
 count();
})();
