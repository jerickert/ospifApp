self.addEventListener("fetch", (event) => {
  const offlineResp = new Response(`
    
        Para utilizar la App OSPIF, 

        es necesario  Internet
    
    `);

  const resp = fetch(event.request).catch(() => offlineResp);
  event.respondWith(resp);
});
