# Tejer la red · REA (versión 2.0)

Recurso educativo abierto de Favio Velázquez y América Palafox para Educación Social y Tecnología, ANEP-IFES (2026). Propone una secuencia para la inclusión digital de personas mayores institucionalizadas a través de la obra de Frida Kahlo, con el Hogar LA PIEBU como dispositivo de referencia.

- Sitio: https://profesor2023.github.io/
- REA: https://profesor2023.github.io/tejer-la-red/
- Chat y contacto: https://profesor2023.github.io/comunicacion/
- Aportes: https://github.com/Profesor2023/profesor2023.github.io/issues

## Archivos

- `index.html`: portada.
- `tejer-la-red/index.html`: REA, cinco encuentros, fuentes culturales, accesibilidad, privacidad, fichas imprimibles y asistente de respuestas preparadas.
- `tejer-la-red/Tejer_la_red_cuadernillo_v2.pdf`: cuadernillo de 18 páginas con descripciones accesibles, códigos QR, fichas, láminas, tarjetas, instrumentos y autorización individual.
- `recursos/index.html` y `temas/index.html`: secciones del sitio.
- `comunicacion/index.html`, `comunicacion/comunicacion.js` y `comunicacion/gracias.html`: sala pública y formulario.
- `configuracion-comunidad.js`: correo, sala y configuración opcional del conteo. No colocar contraseñas ni claves privadas.
- `comunidad.css` y `estadisticas.js`: estilos de comunicación y control del permiso de conteo.
- `estilo.css`, `manifest.webmanifest`, `sw.js`, íconos e imágenes: presentación, aplicación instalable y copia sin conexión.

Las dos copias de `Materiales_uso_sin_conexion.pdf` se retiraron por obsoletas. El único cuadernillo vigente es el indicado arriba. El ZIP contiene además `LEEME_como_actualizar_el_sitio.txt`, una instrucción de administración que no necesita publicarse en GitHub.

## Estado y funcionamiento

Versión 2.0 con ajustes finales del 5 de octubre de 2026, alineada con el primer parcial. Se mantienen la elección cultural de América y la mediación educativa. Los encuentros todavía no se implementaron con residentes.
Se corrigieron la prioridad de la respuesta sobre objetivos y la captura del historial antes de vaciar el campo. Las flechas recuperan preguntas escritas durante la visita, sin enviarlas ni guardarlas después.

Las herramientas educativas usan HTML, CSS y JavaScript propios. El asistente no es IA generativa: no utiliza claves de API ni transmite consultas. Preferencias, preparativos y notas son locales. El service worker conserva páginas, estilos, scripts y cuadernillo después de una visita con conexión. Museos, video, chat, correo y estadísticas necesitan internet.

El chat se conecta a tlk.io al pulsar el botón, después del aviso y del consentimiento. La sala es pública, sin moderación permanente. El proveedor procesa alias, IP y mensajes; según su política, retira los mensajes de salas no moderadas después de diez minutos. No sirve para registrar ni publicar producciones de residentes.
El formulario envía datos a FormSubmit mediante POST en otra pestaña y conserva el texto en la página de origen. Mantiene la protección reCAPTCHA del servicio y un campo contra envíos automatizados. No publica mensajes ni crea una lista de difusión. La recepción real debe comprobarla Favio.

## Activar el correo

Destino: **faviovelazquez17@gmail.com**. La verificación del destinatario está pendiente y la web lo indica.

1. Enviar una consulta de prueba desde la página de comunicación y completar la verificación de FormSubmit.
2. Abrir el mensaje de activación en el correo destinatario y confirmar el enlace. Revisar también correo no deseado.
3. Repetir la prueba y comprobar su recepción. Solo después, cambiar `correoVerificado` a `true` en `configuracion-comunidad.js`.

Mientras tanto se ofrece correo directo. Una futura dirección exclusiva necesita su propia activación: cambiar `correo` y actualizar la dirección y el atributo `action` del HTML para conservar la alternativa sin JavaScript. No publicar credenciales de Gmail.

## Activar las visitas

**No están activas**: falta una cuenta propia de GoatCounter administrada por Favio. La web no muestra un total ficticio.

1. Crear la cuenta en https://www.goatcounter.com/signup y completar sus condiciones y verificación.
2. Mantener activadas las sesiones, dejar desactivadas las visitas individuales y desactivar ubicación, idioma, pantalla, navegador y sistema si solo se desea el conteo agregado. Habilitar “Allow adding visitor counts on your website” para mostrar el total.
3. Copiar el código público en `codigoGoatCounter` y cambiar `activas` a `true` en `configuracion-comunidad.js`. No se necesita una clave privada.
4. Abrir el sitio, permitir el conteo y comprobar una visita en el panel. Repetir una carga desde la misma IP y navegador para comprobar el filtro. El total público puede tardar hasta cuatro horas en actualizarse.

La ruta común `/visita-sitio` reúne las páginas sin sumar cada sección como una persona nueva. GoatCounter distingue sesiones por sitio, IP y navegador durante hasta ocho horas; no mantiene IP en su base de datos ni garantiza un conteo exacto de personas. Una IP compartida o cambiante altera la estimación. Solo se cuentan navegadores que dan permiso; retirarlo detiene nuevos envíos, pero no borra los totales agregados.
La configuración se consulta primero en la red. Al modificar otros recursos, actualizar el nombre de la caché en `sw.js` y publicarlos conjuntamente.

## Fuentes técnicas

- Chat e inserción: https://tlk.io/
- Privacidad del chat: https://tlk.io/privacy
- Formulario y activación: https://formsubmit.co/
- Privacidad y condiciones del formulario: https://formsubmit.co/privacy.pdf
- Sesiones: https://www.goatcounter.com/help/sessions
- Privacidad de visitas: https://www.goatcounter.com/help/privacy
- Registro mediante imagen: https://www.goatcounter.com/help/pixel
- Total público: https://www.goatcounter.com/help/visitor-counter

## Derechos

Textos, fichas y esquemas propios bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es). Obras y fotografías enlazadas conservan sus derechos: ni el sitio ni el cuadernillo reproducen sus imágenes. Servicios externos y mensajes de terceras personas quedan fuera de la licencia. Las contribuciones autorizadas de residentes, si se publicaran después, también quedan fuera: cada persona conserva el derecho a retirarlas.
No publicar ni enviar nombres, fotografías, información de salud o producciones identificables de residentes. Su eventual publicación sigue el protocolo específico de autorización individual e institucional del REA.
