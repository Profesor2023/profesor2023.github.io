(function(){
 'use strict';
 var config=window.TejerComunidad;
 if(!config)return;
 var address=config.correo;
 if(!/^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/.test(address))return;
 document.querySelectorAll('[data-contact-email]').forEach(function(a){a.textContent=address;a.href='mailto:'+address;});
 var form=document.getElementById('contact-form');
 var formStatus=document.getElementById('contact-status');
 if(form){
  form.action='https://formsubmit.co/'+address;
  var activation=document.getElementById('contact-activation');
  activation.textContent=config.correoVerificado?'Correo destinatario verificado. El servicio procesa los mensajes al completar el envío.':'La verificación del correo destinatario está pendiente. El formulario puede solicitar su activación antes de entregar mensajes. Podés usar también el enlace de correo directo.';
  form.addEventListener('submit',function(ev){
   if(navigator.onLine===false){ev.preventDefault();formStatus.textContent='Estás sin conexión. Tu mensaje permanece en el formulario; conectate para enviarlo.';return;}
   formStatus.textContent='El envío continúa en FormSubmit, en otra pestaña. Completá los pasos que indique el servicio; esta página conserva tu texto.';
  });
 }
 var frameBox=document.getElementById('live-chat');
 var chatStatus=document.getElementById('live-chat-status');
 var chatConsent=document.getElementById('chat-consent');
 var start=document.getElementById('open-live-chat');
 var leave=document.getElementById('close-live-chat');
 var room='https://tlk.io/'+encodeURIComponent(config.sala);
 document.getElementById('chat-external-link').href=room;
 start.disabled=false;
 start.addEventListener('click',function(){
  if(!chatConsent.reportValidity())return;
  if(navigator.onLine===false){chatStatus.textContent='El chat necesita conexión. No se abrió la sala.';return;}
  if(frameBox.querySelector('iframe'))return;
  var frame=document.createElement('iframe');frame.className='chat-frame';frame.title='Sala pública Tejer la red: conversación en tiempo real';frame.referrerPolicy='no-referrer';frame.src=room+'?theme=theme--day';
  frame.addEventListener('load',function(){chatStatus.textContent='La sala se cargó. Escribí un alias en «Name» y pulsá Intro para conversar. Si no podés entrar o no aparecen sus controles, abrí la misma sala en otra pestaña.';});
  frameBox.appendChild(frame);frameBox.hidden=false;start.hidden=true;leave.hidden=false;
  chatStatus.textContent='Abriendo la sala externa…';
 });
 leave.addEventListener('click',function(){frameBox.replaceChildren();frameBox.hidden=true;start.hidden=false;leave.hidden=true;chatConsent.checked=false;chatStatus.textContent='Saliste del chat. No se enviarán más mensajes desde esta ventana.';start.focus();});
})();
