import GIF from "gif.js";

self.onmessage = function (e) {
    const { width, height, delay } = e.data;
    const gif = new GIF({
        workers: 2,
        quality: 10,
        width,
        height,
        delay,
    });

    gif.on("finished", function (blob) {
        self.postMessage(blob);
    });

    self.onmessage = function (event) {
        if (event.data === "addFrame") {
            gif.addFrame(event.data.imageData);
        }
        if (event.data === "finish") {
            gif.render();
        }
    };
};
