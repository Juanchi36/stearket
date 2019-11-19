# STEARTEK

## Instalación PHP

    cd steartek
    composer install

## Instalación React

    cd steartek/st
    npm install

## Ejecución

1. 
Servidor apache localhost/phpmyadmin

2. 
Servidor API php

    cd steartek
    php -S localhost:9001 -t public/

3. 
Servidor API nodejs 

    cd steartek/nodejs-server-generated
    npm start

4. 
En navegador (Chrome) extensión instalada y corriendo ----> Moesif Orign & CORS Changer

5. 
Servidor para CORS

    cd steartek/st
    npm install -g local-cors-proxy
    lcp --proxyUrl https://www.g2a.com
    lcp --proxyUrl https://store.steampowered.com --port 8011

6. 
Servidor apache

127.0.0.1:3306 con base de datos llamada games con tabla llamada steamjuegos con un campo appid y otro llamado name.

7. 
App en ReactJs

    cd steartek/st
    npm start





