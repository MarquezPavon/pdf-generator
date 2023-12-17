# Prueba técnica

Microservicio encargado de generar un PDF a partir de un archivo JSON.

## Pre-requisitos 📋 

 - Visual Studio Code 

 - Nodejs 

 - Typescript


## Puesta en funcionamiento 💻 

#### Paso 1: Instalación de las dependencias.
En la termianl, instalar las dedpendencias con el comando. 
```bash
  npm install
```

#### Paso 2: Levantar servidor. 
Una vez instaladas las dependencias, levantar el servidor con el comando.
```bash
  npm start
```


## Rutas


### Generar pdf (enviar archivo JSON).
```bash
http://localhost:4000/api/pdf/generate
```


### Descargar PDF (desde el navegador)
```bash
http://http://localhost:4000/api/pdf/download
```