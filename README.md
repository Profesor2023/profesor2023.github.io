# Tejer la red · REA (versión 2.0)

Recurso educativo abierto de Favio Velázquez y América Palafox para Educación Social y Tecnología, ANEP-IFES (2026). Propone una secuencia de cinco encuentros para la inclusión digital de personas mayores institucionalizadas a través de la obra de Frida Kahlo, con el Hogar LA PIEBU como dispositivo de referencia.

- Sitio: https://profesor2023.github.io/
- REA: https://profesor2023.github.io/tejer-la-red/
- Dialogar y contactar: https://profesor2023.github.io/comunicacion/
- Aportes: https://github.com/Profesor2023/profesor2023.github.io/issues

## Entrega

Producto final de la segunda entrega del primer parcial, publicado el 22 de octubre de 2026. El proyecto se presentó en la primera entrega. Los encuentros todavía no se implementaron con residentes: el recurso es un diseño para profesionales, no el informe de una intervención realizada.

## Archivos

- `index.html`: portada de la entrega, con el código QR del sitio.
- `qr-tejer-la-red.svg` y `qr-tejer-la-red.png`: código QR que abre https://profesor2023.github.io/.
- `compartir-tejer-la-red.jpg`: imagen que acompaña el enlace al compartirlo en mensajería y redes.
- `tejer-la-red/index.html`: el REA. Cinco encuentros, fuentes culturales, accesibilidad, privacidad, fichas imprimibles y asistente de respuestas preparadas.
- `tejer-la-red/*.webp` y `tejer-la-red/*.png`: gráficos del REA. El navegador usa la versión WebP; la PNG queda como respaldo.
- `tejer-la-red/Tejer_la_red_cuadernillo_v2.pdf`: cuadernillo imprimible de 18 páginas.
- `comunicacion/`: sala pública de chat, formulario de consulta y página de confirmación.
- `configuracion-comunidad.js`: correo, sala y configuración del conteo de visitas. No colocar contraseñas ni claves privadas.
- `comunidad.css` y `estadisticas.js`: estilos de comunicación y permiso del conteo.
- `estilo.css`, `manifest.webmanifest`, `sw.js`, íconos e imágenes: presentación, aplicación instalable y copia sin conexión.

## Funcionamiento

- El sitio usa HTML, CSS y JavaScript propios. El asistente no es inteligencia artificial generativa: responde con textos preparados y no envía las consultas a ningún servidor.
- Preferencias de lectura, preparativos y notas quedan solo en el navegador de cada persona.
- Después de una visita con conexión, el service worker guarda páginas, gráficos, estilos y cuadernillo para usarlos sin internet. Museos, video, chat y formulario necesitan conexión.
- Chat: tlk.io. La sala solo se abre después de aceptar el aviso de privacidad. Es pública y sin moderación permanente; no sirve para registrar ni publicar producciones de residentes.
- Formulario: FormSubmit, con destino faviovelazquez17@gmail.com. Activado; la recepción se comprobó el 5 de octubre de 2026.
- Conteo de visitas: inactivo y oculto. Para activarlo hace falta una cuenta propia de GoatCounter: copiar su código público en `codigoGoatCounter` y cambiar `activas` a `true` en `configuracion-comunidad.js`. Recién entonces aparece al pie el control de permiso.
- Al modificar archivos, cambiar el nombre de la caché en `sw.js` para que los navegadores descarguen la versión nueva.

## Dominio propio

Si se vincula un dominio (por ejemplo, tejerlared.uy), conviene hacerlo recién cuando el dominio ya apunte a GitHub Pages: mientras tanto el sitio deja de abrir. Después del cambio, GitHub redirige profesor2023.github.io al dominio nuevo, de modo que el QR sigue funcionando. Hay que actualizar las direcciones absolutas de `index.html`, `tejer-la-red/index.html` y `comunicacion/index.html`, y volver a activar el formulario de FormSubmit desde el dominio nuevo.

## Derechos y privacidad

Textos, fichas y esquemas propios bajo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es). Las obras y fotografías enlazadas conservan sus derechos: ni el sitio ni el cuadernillo reproducen sus imágenes. Los servicios externos y los mensajes de terceras personas quedan fuera de la licencia.

No publicar ni enviar nombres, fotografías, información de salud o producciones identificables de residentes. Su eventual publicación sigue el protocolo de autorización individual e institucional del REA.

## Fuentes técnicas

- Chat: https://tlk.io/ · Privacidad: https://tlk.io/privacy
- Formulario: https://formsubmit.co/ · Privacidad y condiciones: https://formsubmit.co/privacy.pdf
- Conteo de visitas: https://www.goatcounter.com/help/privacy
