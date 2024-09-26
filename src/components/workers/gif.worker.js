import GIF from 'gif.js';

self.onmessage = function (e) {
    console.log("Worker received init message:", e.data);
    const { width, height, delay } = e.data;
    const gif = new GIF({
        workers: 2,
        quality: 10,
        width,
        height,
        delay,
    });

    gif.on("finished", function (blob) {
        console.log("Worker finished GIF creation");
        self.postMessage({ type: 'finished', blob });
    });

    self.onmessage = function (event) {
        console.log("Worker received message:", event.data);
        if (event.data.type === "addFrame") {
            console.log("Adding frame in worker.");
            gif.addFrame(event.data.imageData, { delay: event.data.delay });
        }
        if (event.data.type === "finish") {
            console.log("Finishing GIF in worker...");
            gif.render();
        }
    };
};
