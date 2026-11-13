# Portafolio de César Rodríguez

Sitio de César Neftalí Rodríguez Sifuentes, desarrollador full stack en Zacatecas. Está pensado para negocios locales —cafés, restaurantes y tiendas— y también muestra software a la medida.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

El build estático sale en `dist/` y se puede publicar en Vercel.

## Agregar un proyecto

Edita `src/data/projects.js` y suma un objeto al arreglo `projects`. El orden del arreglo es el orden en la página.

No lo publiques hasta que el demo esté en línea. Cuando exista la URL, se puede sumar FerIA (app de hackathon) con el mismo formato:

- `id`, `title`, `kind`, `summary`
- `stack` (etiquetas)
- `demoUrl`, `repoUrl`
- `image` y `imageAlt` (opcionales; sin imagen se muestran las iniciales)

Las etiquetas de la sección «Sobre mí» salen de esos proyectos.
