/*
Imports & configuration
!! Don't edit this code unless you are sure of what you do !!
*/
  // Class
  const express = require('express');
  const classRouter = express.Router({ mergeParams: true });
  const userCollection = require('../../data/users');
// 


/*
Class definition
*/
  class RouterClass {
    
    constructor(){}

    // Définition des routes
    routes(){

        /* 
        Route to display the home page
        - To send data to the route, juste add an object has second param
        */
          classRouter.get( '/', (req, res) => {
            /*on test si le cookie existe
              s'il n'existe pas on défini connectedUser avec la valeur du cookie pour Afficher dans la nav MON COMPTE
            */
            var cookieID = req.cookies.emailCookie
            if(typeof cookieID == 'undefined') cookieID = false
            res.render('index', { connectedUser: cookieID, userCollection: userCollection })
          });
        //

        /* 
        Route to connect a user
        - Make 2 const to get email and password from the request
        - Make a loop on the const 'userCollection'
        - Check if yoou find the email
        - Check if the password is correct
        - Send back the correct page
        */
          classRouter.get( '/login', (req, res) => {
            var cookieID = req.cookies.emailCookie
            if(typeof cookieID != 'undefined'){
             /* Rediriger les personnes qui tentent d'accéder à la page en étant déja connecté */
              res.redirect('/me')
            }
            else{
               //Connected user toujours à false pour cette page
            res.render('login', { connectedUser: false});}
          });
        //

        /* 
        Route to display connected user informations
        - Make a loop on the const 'userCollection'
        - Find the correct information about the user
        - Send back the correct page with the data
        */
          classRouter.get( '/me', (req, res) => {
           
            var cookieID = req.cookies.emailCookie
            if(typeof cookieID == 'undefined'){ cookieID = false
             /*Si le cookie est undefined on redirige directement vers login car aucun user n'est connecté
             Rediriger les personnes qui tentent d'accéder au profil sans être connecté */
              res.redirect('/login')
            } 
            else res.render('me', { connectedUser: cookieID,  userCollection: userCollection} );
          });
        //
    };

    /* 
    Initialize routes 
    !! Don't edit this code unless you are sure of what you do !!
    */
    init(){
        this.routes();
        return classRouter;
    };
  };
//


/*
Export class
!! Don't edit this code unless you are sure of what you do !!
*/
    module.exports = RouterClass;
//