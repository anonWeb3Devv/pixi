// import GIF from "gif.js";

import GIF from "gif.js.optimized";

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
        self.postMessage({ type: "finished", blob });
    });

    self.onmessage = function (event) {
        const { type, imageData } = event.data;
        if (type === "addFrame") {
            gif.addFrame(imageData);
        } else if (type === "finish") {
            gif.render();
        }
    };
};

