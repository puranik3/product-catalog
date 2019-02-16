// Express has 4 objects
// Application
// Router
// Request
// Response
const express = require( 'express' );
var { getFormattedDate, getFormattedTime } = require( './utils/index' );

// create an application object
const app = express();

// setup routes on the app object
// GET, PUT, POST, DELETE
app.get( '/', function( req, res ) {
    res.send( 'Hi, I am Express! I make web app development easy.' );
});

app.get( '/date', function( req, res ) {
    res.send( getFormattedDate( new Date() ) );
});

app.get( '/time', function( req, res ) {
    res.send( getFormattedTime( new Date() ) );
});

app.get( '*', function( req, res ) {
    res.send( 'I am not sure what you are looking for?!!' );
});

const port = 3000;
app.listen( port, function( error ) {
    if( error ) {
        console.log( 'not able to start server on port ' + port );
        console.error( error );
        // throw err;
        process.exit(1);
    }

    console.log( 'server started on port ' + port );
});