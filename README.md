# DealEngineApi

DealEngineApi es una API Rest que fue creada con NodeJS versión 22.9.0, con ECMAScript 6, TypeScript y se conecta a una Base de datos PostgreSQL, al momento de descargar este proyecto, instale las dependencias con npm install, para ejecutar npm run dev, la aplicación corre en:  http://localhost:4000/

## DealEngineApi

DealEngineApi es una Api Rest que  fue creada como proyecto de prueba para la vacante como Desarrollador dentro de la empresa Deal Engine, es una API en base a información de vuelos, se necesito saber el clima del aeropuerto origen y aeropuerto destino, con una simple consulta de su número de abordaje.

![](/imagenes/01.png)

## Métodos y rutas:

Get: /api/flightboard/getDestAirportsList
Sirve para consultar la información de los aeropuertos destino.

![](/imagenes/02.png)

Post: /api/flightboard/getBoardingId
Sirve para consultar la información detallada según tu número de abordaje.

![](/imagenes/03.png)

## SQL.

En la carpeta database verá los Scripts SQL utilizados.

![](/imagenes/04.png)

## Base de datos.

Como podemos ver es una base de datos PostgreSQL, que en el cual está conformado por la tabla flightboard.

![](/imagenes/05.png)

## Function creationid.

Esta función fue creada para generar número aleatorios y utilizarlos como Ids de abordaje dentro de la tabla flightboard.

![](/imagenes/06.png)

## Despliegue a producción.

Del lado del despliegue tenemos una máquina virtual Linux y PM2 para la ejecución de la API, como así su dominio URL y certificado correspondiente.

Despliegue en operación con URL y certificado.

https://api.gmayasapp.site/

![](/imagenes/07.png)

PM2 monitoreando la ejecución de la aplicación en la máquina virtual Linux. 

![](/imagenes/09.png)

`© 2024 Copyright: GMayaS C:\>Desarrollo en Sistemas.`