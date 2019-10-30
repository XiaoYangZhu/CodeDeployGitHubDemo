var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    const response = {
        statusCode: 200,
        body: 'The time now in Los Angeles now is: ' + currentTime.toString()
    };
    callback(null,response);
};
