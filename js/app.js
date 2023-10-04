if (navigator.serviceWorker) {   
   navigator.serviceWorker.register("../sw.js");
    console.log('En app.js, Service worker registrado '); 
} else {console.log('NO podemos usar el service worker');}

/* if (window.caches) {
   caches.open('prueba1');
} */
