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



