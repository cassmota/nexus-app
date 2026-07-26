// NEXUS — service worker mínimo.
// Não faz cache agressivo (o app depende de dados em tempo real do Firebase),
// mas sua simples presença e o handler de "fetch" são exigidos pelos
// navegadores para liberar a opção de instalar o app na tela inicial.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Passthrough simples: sempre busca da rede normalmente.
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
