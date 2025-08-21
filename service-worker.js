self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("todo-cache").then((cache) => {
            return cache.addAll([
                "/index.html",
                "/style.css",
                "/script.js",
                "/manifest.json",
                "/icon-192.png",
                "/icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondwith(
        caches.match(e.request).then((res) => {
            return res || fetch(e.request);
        })
    );
});