# Guía de Configuración del Front Pelicuas

## Pasos para la instalacion

1. Tener instalado Node para su sistema operativo seguir los pasos de instalacion de su sitio web en base a su sistema operativo

   - `https://nodejs.org/en `

## Instalar Dependencias

Asegúrate de tener Node.js y npm instalados en tu máquina. Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

## Renombrar Variable de Entorno

En la carpeta `src/environments/`, renombra el archivo `environments.sample.ts` a `environments.ts`.

## Configurar la variabes de entorno

```
 apiLocal: 'URL_DE_TU_BACKEND'
```

```
 apiMovie: 'URL_API_MOVIE'
```

## Correr la aplicacion

```bash
ng serve
```

La aplicación estará disponible en [http://localhost:4200/](http://localhost:4200/).

## Comando para hacer el Build

```bash
ng build
```
