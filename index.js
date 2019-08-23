var app = new Vue({
    el: '#app',
    data: {
        message: `Dagens datum är ${new Date().toLocaleString()}`,
    },
});
