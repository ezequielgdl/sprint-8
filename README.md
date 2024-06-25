# Inprocode

Este proyecto fue creado con [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.
El backend está creado con Node, Express, Mongoose y MongoDB. Utiliza los componentes Google Maps, FullCalendar y ChartJS.
El objetivo de este proyecto es crear un backend simple para poder hacer operaciones CRUD en ella y poder utilizar plugins en el frontend.

## Instalación

1 - Clonar el repositorio

`git clone`

2 - Abrir una terminal para el backend y asegurate de tener instalado Node, Express y Mongoose.

3 - Abrir una terminal para la carpeta frontend y usar el comando `npm install` para instalar las dependencias necesarias.

3b - Si no tienes TailwindCSS instalado, instalar usando `npm install -D tailwindcss`

3c - Reemplazar XXX por el API key en el index.html en la URL "https://maps.googleapis.com/maps/api/js?key=XXX"

4 - En la terminal de backend, usar el comando `node app.js` para comenzar el servidor del backend.

5 - En la terminal del frontend, usar el comando `ng serve` para comenzar el servidor local de frontend.

## Tecnologías

- Angular 18
- TailwindCSS
- Node
- Express
- Mongoose
- MongoDB

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
