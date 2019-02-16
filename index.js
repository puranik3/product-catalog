// Globals are accessible anywhere in code - not a good practice to use them
global.appName = 'My fist Node.js app';

const http = require( 'http' );
var { getFormattedDate, getFormattedTime } = require( './utils/index' );
// var { getFormattedDate } = require( './utils/date-utils' ); // this second include does not execute the date-utils module once again - the intial export is simply returned again

// a web server is created
// the function passed to createServer gets called whenever there is an HTTP request
// Reference: https://nodejs.org/dist/latest-v8.x/docs/api/http.html
const server = http.createServer(function( req, res ) {
    var date = new Date();
    var formattedDate = getFormattedDate( date );
    var formattedTime = getFormattedTime( date );
    
    res.setHeader( 'Content-Type', 'text/html' );
    res.end( formattedDate + '<br />' + formattedTime );
});

// non-blocking call
// function passed gets called once the server is actually started
const port = 3000;
server.listen( port, function( error ) {
    if( error ) {
        console.log( 'not able to start server on port ' + port );
        console.error( error );
        // throw err;
        process.exit(1);
    }

    console.log( 'server started on port ' + port );
});

// handle uncaught exception
process.on( 'uncaughtException', function( error ) {
    console.log( 'error : ', error.message );
});