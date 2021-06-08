var Ping = require('./lib/ping'),
    websites = [
        {
            url: 'https://retro-weather-app.herokuapp.com/',
            timeout: 1
        },
    ],
    monitors = [];

websites.forEach(function (website) {
    var monitor = new Ping ({
        website: website.url,
        timeout: website.timeout
    });

    monitors.push(monitor);
});