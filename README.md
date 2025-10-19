# Clase UCC - Aplicativo React con Vite

## Descripción
By: Michael Lagos y Nicolas Bastidas

Este proyecto es un aplicativo desarrollado en **React con Vite** para aprender y aplicar **pruebas unitarias** con Jest.

El aplicativo incluye:
# Pruebas Unitarias — Aplicación React (Vite)

Proyecto con ejemplos y ejercicios para practicar React, TypeScript y pruebas unitarias.

## Contenido

- Componentes reutilizables en `src/components`.
- Vistas y rutas en `src/views` y `src/routes`.
- Configuración de pruebas con Jest / Vitest según el script disponible.

## Ejecutar localmente

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar servidor de desarrollo:

```bash
npm run dev
```

3. Compilar para producción:

```bash
npm run build
```

4. Ejecutar pruebas (Jest o Vitest según tu configuración):

```bash
npm test        # si usas jest
npx vitest      # si usas vitest
```

5. Revisar tipos (TypeScript):

```bash
npm run type-check
```

6. Lint y formateo:

```bash
npm run lint
npm run format
```

## Workflows de CI

En este repositorio hay 2 workflows activos en `.github/workflows`:

- `ci.yml` — ejecuta lint, type-check, build y pruebas (integrado).
- `ci-vitest.yml` — ejecuta pruebas con Vitest.

Ambos workflows incluyen `workflow_dispatch` para ejecutarlos manualmente desde la pestaña **Actions** en GitHub.

Cómo ejecutar manualmente:

1. Ve a la pestaña **Actions** del repositorio en GitHub.
2. Selecciona el workflow (`CI - Integrado` o `CI - Vitest`).
3. Pulsa **Run workflow** (en la columna derecha) y confirma.

## Despliegue (opcional)

Si quieres publicar en GitHub Pages, necesitaremos un workflow de despliegue que genere `dist` y publique en la rama `gh-pages`. Puedo añadirlo de nuevo si lo deseas.

## Notas y archivos importantes

- `package.json` — scripts y dependencias.
- `tsconfig.json` — configuración de TypeScript.
- `package.json.backup` — copia de seguridad local (puedes borrarla si no la necesitas).



