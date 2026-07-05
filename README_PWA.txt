HomeControl IA PWA 14.42

Sube estos archivos a la raíz de tu repositorio GitHub Pages:
- index.html
- manifest.json
- sw.js
- icon-192.png
- icon-512.png
- splash-1024.png

Prueba en Chrome Android:
1) Abre tu URL de GitHub Pages.
2) Menú ⋮ > Agregar a pantalla principal / Instalar app.
3) Abre desde el icono HomeControl.
4) Verifica login, Supabase, fotos y guardado.

Nota: el service worker usa red primero para index.html para que tus actualizaciones de GitHub no se queden atoradas en caché.
