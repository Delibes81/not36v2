# Kit web — Notaría 36

Reconstrucción técnica basada en la imagen de referencia proporcionada. El logotipo está trazado como curvas vectoriales, por lo que no depende de una tipografía instalada y puede escalarse sin perder nitidez.

## Archivo recomendado

- `logo-notaria36.svg`: encabezado o pie de página sobre fondo claro.
- `logo-notaria36-reversa.svg`: encabezado o pie de página sobre fondo azul oscuro.
- `isotipo-notaria36.svg`: espacios compactos, menú móvil o avatar.
- `favicon.ico`: favicon compatible con navegadores.
- `apple-touch-icon.png`: icono para dispositivos Apple.
- Los archivos PNG sirven para sistemas que no acepten SVG.

## Implementación

```html
<a href="/" aria-label="Notaría 36 — Inicio">
  <img
    src="/assets/logo-notaria36.svg"
    width="520"
    height="135"
    alt="Notaría 36 Ciudad de México"
  >
</a>
```

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/assets/isotipo-notaria36.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
```

Para evitar deformaciones, cambiar solamente el ancho y mantener la altura automática:

```css
.logo-notaria36 {
  display: block;
  width: clamp(220px, 32vw, 520px);
  height: auto;
}
```

## Paleta reconstruida

- Azul marino: `#111F35`
- Azul secundario: `#173E75`
- Verde: `#269B49`

Antes de usarlo como identidad definitiva en impresos o trámites, conviene confirmar con el cliente que no exista un archivo maestro previo ni ajustes legales de marca pendientes.
