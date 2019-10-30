var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    const response = {
        statusCode: 200,
        body: 'The time right now in Los Angeles is about : ' + currentTime.toString()
    };
    callback(null,response);
};
