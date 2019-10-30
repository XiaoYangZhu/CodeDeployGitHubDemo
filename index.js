var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        headers: {
          "Content-Type": "text/html"
        },
        statusCode: '200',
        body: 'The time in Los Angeles now is: ' + currentTime.toString() + ' .',
    });
};
