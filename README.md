# VIEWER APP

Project_name: Viewer App - Visor de imágenes

El proyecto se conecta a la Api de Unsplash para mostrarnos imágenes aleatorias. El contenedor de imágenes tiene diseño "Masonry" y va cargando las imágenes automaticamente al hacer scroll. Al clickar sobre una imagen, ésta se muestra a mayor tamaño adecuado a las dimensiones del navegador con un modal. La aplicación es responsive.

<img src="/src/assets/ViewerApp-by-ToniMachado.png" alt="Screenshot App">

## Background | Problema a solucionar

El problema a solucionar ha sido conectar a la Api que nos ha devuelto una colección de imágenes y mostrarlas por pantalla con un diseño de grilla "Masonry".

## Solución adoptada

La aplicación se ha desarrollado con Angular. La conexión a la Api se ha realizado a traves de HttpClient, basado en Observables, que ha conectado con la Api y ha recopilado la información devuelta. Para el diseño se ha utilizado Angular Material, Bootstrap, CSS y Google Fonts. Las animaciones (fade-in al cargar fotos) se han realizado con la libreria https://animate.style/

## Estructura de archivos 

Al ser una aplicación sencilla, la distribución de archivos de la app se ha centralizado en la carpeta "viewer". La carpeta "main-page" contiene los componentes de la galeria del imágenes (padre) y del modal al abrir una imagen (hijo). En "interfaces" tenemos las interfaces de los objetos devueltos por la Api. En la carpeta "services" se han centralizado los servicios de llamada a a Api y obtencion de datos. En los "environments" se han definido las clientId y apiUrl tanto en despliegue como en producción.

## CodeFactor Rating A

<img src="https://www.codefactor.io/repository/github/tonimjdev/viewer-app-challenge/badge" alt="CodeFactor" />
https://www.codefactor.io/repository/github/tonimjdev/viewer-app-challenge

## Installation

Para levantar el proyecto, clonar el repositorio y desde la terminal ejecutar:
```shell
    ng serve -o
```

## Despliegue aplicación

Pueden utilizar la aplicación ya desplegada en el siguiente enlace:
https://viewer-app-challenge.vercel.app/

## Contact info

La aplicación ha sido programada por Toni Machado.
Contacto: tonimdev@gmail.com 

(C)2023 Toni Machado
www.tonimachado.com
