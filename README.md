# Proyecto de Razas de Perros

![Perro feliz](https://res.cloudinary.com/dmz6gyyoo/image/upload/v1678699749/to5kn2brlzuze2izzev9.png)

Este proyecto es una aplicación web para explorar y conocer más sobre las diferentes razas de perros. Está desarrollado con React para el frontend, una base de datos PostgreSQL para almacenar los datos de las razas de perros, y un servidor con Express para manejar las peticiones al backend.

## Funcionalidades
- Ver una lista completa de todas las razas de perros.
- Ver información detallada de cada raza de perro, incluyendo fotos y características físicas.
- Agregar nuevas razas de perros a la base de datos.

## Tecnologías utilizadas
- React: Biblioteca de JavaScript utilizada para construir la interfaz de usuario.
- PostgreSQL: Sistema de gestión de bases de datos utilizado para almacenar información sobre las razas de perros.
- Express: Framework de Node.js utilizado para manejar las peticiones al backend.

## Instalacion
1. Clona este repositorio en tu computadora.
2. En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```
3. Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).
4. Crearse desde psql una base de datos llamada `dogs`.
5. Navegar hasta la carpeta `client` y ejecutar el comando:
```bash
npm install
```
6. Navegar hasta la carpeta `api` y ejecutar el comando:
```bash
npm install
```