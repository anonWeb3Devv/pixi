import GIF from "gif.js"

self.onmessage = function (e) {
    const { options } = e.data;
    const gif = new GIF(options);

    gif.on('finished', function (blob) {
        self.postMessage({ type: 'finished', blob });
    });

    // Here you can add frames as needed
    self.onmessage = function (event) {
        if (event.data.type === 'addFrame') {
            gif.addFrame(event.data.imageData, { delay: event.data.delay });
        }
    };

    self.postMessage({ type: 'ready' });
};
