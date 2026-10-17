# Portfolio · Daniel Carpintero

Portfolio profesional desarrollado con **React, TypeScript y Vite**. Presenta mi perfil y una selección de proyectos de desarrollo software, procesamiento de datos y sistemas basados en agentes.

## Proyectos

| Proyecto | Tecnología principal | Repositorio |
| --- | --- | --- |
| FocusDesk | Electron, React, TypeScript, electron-store | [Código y versión Windows 1.0.0](https://github.com/dcarpin03/focusdesk) |
| Personal Discovery Engine | Python, Pydantic, DuckDB | [Repositorio](https://github.com/dcarpin03/personal-discovery-engine-showcase) |
| Ant Colony Lab | Python, Pygame | [Repositorio](https://github.com/dcarpin03/ant-colony-lab) |
| Multi-Agent Travel Recommender | Python, Agno, Pandas, Pydantic | [Repositorio](https://github.com/dcarpin03/multi-agent-travel-recommender) |

**FocusDesk** ofrece [descarga de la versión 1.0.0 para Windows](https://github.com/dcarpin03/focusdesk/releases/tag/v1.0.0). Los demás proyectos son ejemplos de código y experimentación documentados en sus repositorios.

## Ejecutar en local

Se requiere Node.js y npm.

```bash
git clone https://github.com/dcarpin03/portfolio.git
cd portfolio
npm ci
npm run dev
```

Vite mostrará la URL de desarrollo (habitualmente `http://localhost:5173`).

## Comprobaciones y compilación

```bash
npm run lint
npm run build
npm run preview
```

El resultado de producción se genera en `dist/`. El portfolio es una web estática; los proyectos enlazados se ejecutan por separado.

## Organización

- `src/components/`: cabecera, presentación, proyectos, perfil, tecnologías y contacto.
- `src/App.css` y `src/index.css`: estilos y diseño responsive.
- `public/`: CV descargable y recursos estáticos.
- `index.html`: metadatos básicos de la página.

## Contacto

Disponible desde el apartado «Contacto» del portfolio. También puedes consultar mi [perfil de GitHub](https://github.com/dcarpin03).

Este repositorio contiene el código del portfolio, no el código de los cuatro proyectos enlazados.
