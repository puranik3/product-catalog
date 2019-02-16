const express = require( 'express' );
const data = require( './products.json' );

const app = express();

// GET /api/products
app.get( '/api/products', function( req, res ) {
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( JSON.stringify( data.products ) );
});

// GET /api/reviews
app.get( '/api/reviews', function( req, res ) {
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( JSON.stringify( data.reviews ) );
});

// GET /products
app.get( '/products', function( req, res ) {
    const productTrs = data.products.map(
        function( product ) {
            return `<tr>
                <td><img src="${product.imageUrl}" /></td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.starRating}</td>
            </tr>`;
        }
    );

    res.send( `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Product catalog</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
            </head>
            <body class="container">
                <h1>Product catalog</h1>
                <hr />
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${productTrs.join( '' )}
                    </tbody>
                </table>
            </body>
        </html>
    ` );
});

const port = process.env.PORT || 8080;
app.listen( port, function( error ) {
    if( error ) {
        console.log( 'not able to start server on port ' + port );
        console.error( error );
        // throw err;
        process.exit(1);
    }

    console.log( 'server started on port ' + port );
});