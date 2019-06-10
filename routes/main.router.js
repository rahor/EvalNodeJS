// MAIN ROUTER  
/*
Imports
*/
const { Router } = require('express');
const FrontRouterClass = require('./front/front.router');
const ApiRouterClass = require('./api/api.router');

/* 
Configuration
*/
    //Parent
    const mainRouter = Router();

    //Child
    const frontRouter = new FrontRouterClass();
    const apiRouter = new ApiRouterClass();

    //Définition des routes
    mainRouter.use('/api', apiRouter.init());
    mainRouter.use('/', frontRouter.init());
//

/* 
Export
*/
module.exports = mainRouter;
//