const request = require('request'),
    statusCodes = require('http').STATUS_CODES;

var elapsedTime = 0

function Ping (opts) {

    this.website = ''

    this.timeout = 15

    this.handle = null

    this.init(opts)
}

Ping.prototype = {
    init: function (opts) {
        var self = this
        self.website = opts.website

        self.timeout = (opts.timeout * (60 * 1000))

        self.start()
    },

    start: function () {
        const self = this,
            time = Date.now();

        console.log("\nLoading..." + self.website + '\nTime: ' + time + '\n')
        var timeAtPing = new Date()
        self.handle = setInterval(function () {
            if(elapsedTime===0)  timeAtPing = new Date()
            self.ping(timeAtPing)
        }, self.timeout)

    },

    ping: function (timeAtPing) {
        const self = this

        try {
            //send request
            request(self.website, function (error, res, body) {
                //website is up
                if (!error && res.statusCode === 200) {
                    self.isOk(timeAtPing)
                }

                //no error but website not ok
                else if (!error) {
                    self.isNotOk(res.statusCode)
                }

                //loading error
                else {
                    self.isNotOk()
                }
            })
        } catch (err) {
            self.isNotOk()
        }
    },

    isOk: function(timeAtPing) {
        this.log('UP','Ok',timeAtPing)
    },

    isNotOk: function (statusCode,resetTime=0) {
        var time =  Date.now(),
            self = this,
            time = self.getFormatedDate(time),
            msg = statusCodes[statusCode + ''];
        this.log('DOWN', msg,resetTime);

    },

    log: function (status, msg, timeAtPing) {
        var self = this,
            time = new Date(),
            today = new Date(time).toUTCString()
            output = '';
        if(status==='DOWN') elapsedTime = 0;
        else elapsedTime = ((time - timeAtPing)/60)/1000
        output += "\nWebsite: " + self.website;
        output += "\nTime: " + today;
        output += "\nStatus: " + status;
        output += "\nElapsedTime: " + elapsedTime + ' minutes';
        output += "\nMessage:" + msg  + "\n";

        console.log(output);
    },


    getFormatedDate: function (time) {
        var currentDate = new Date(time);

        currentDate = currentDate.toISOString();
        currentDate = currentDate.replace(/T/, ' ');
        currentDate = currentDate.replace(/\..+/, '');

        return currentDate;
    }
}

module.exports = Ping;