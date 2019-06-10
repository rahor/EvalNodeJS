/* 
Import
*/
    require('dotenv').config();
    const express = require('express');
    const ejs = require('ejs');
    var cookieParser = require('cookie-parser')

     // Inner
     const mainRouter = require('./routes/main.router');

    /* 
    You need to import the module to use the data from the body of a request and client vue folder
    - https://www.npmjs.com/package/body-parser
    - https://www.npmjs.com/package/path
    */
        //=> Start coding here...
        const bodyParser = require('body-parser');
        const path = require('path');
    //
//


/* 
Configuration
*/
    /* 
    You need to define a const for the server and the port
    */
        //=> Start coding here...
        const server = express();
        const port = process.env.PORT;
    //

    class ServerClass{
        init(){

            /* 
            You need to connfigure the module to use the data from the body of a request
            https://www.npmjs.com/package/body-parser
            */
                //=> body-parser
                server.use(bodyParser.json({limit: '10mb'}));
                server.use(bodyParser.urlencoded({ extended: false }));
            //
            
            //=> Cookie-parser
            server.use(cookieParser());

            //=> Use path to add views
            server.set( 'view engine', 'ejs' );
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );
            
            /* 
            Router import & configuration
            !! Don't edit this code unless you are sure of what you do !!
            */


                // Configurer les routes
                server.use('/', mainRouter);


                /* 
                You need to start your serverr
                */
                    this.launch();
                //
            //
        };

        /* 
        Lauch method
        !! Don't edit this code unless you are sure of what you do !!
        */
            launch(){
                server.listen(port, () => console.log({ server: `http://localhost:${port}` }));
            };
        //
    };
//


/* 
Start
!! Don't edit this code unless you are sure of what you do !!
*/
    new ServerClass().init();
//