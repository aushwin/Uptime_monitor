var Ping = require('./lib/ping'),
    websites = [
        {
            url: 'https://retro-weather-app.herokuapp.com/',
            timeout: 0.01 //! change elapsed time to 1 to send request after 1 minute
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