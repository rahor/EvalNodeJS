/*
Imports & configuration
!! Don't edit this code unless you are sure of what you do !!
*/
  // Class
  const express = require('express');
  const router = express.Router({ mergeParams: true });
  const userCollection = require('../../data/users');
// 


/*
Class definition
*/
  class ApiRouterClass {

    // Définition des routes
    routes(){

        //Test route api
          router.get( '/', (req, res) => {
            res.json({ msg: 'Test Api' })
          });

        /* 
        Route to connect a user
        - Make 2 const to get email and password from the request
        - Make a loop on the const 'userCollection'
        - Check if yoou find the email
        - Check if the password is correct
        - Send back the correct page
        */

          router.post( '/login', (req, res) => {

            //S'il n'y a pas de body
            if (typeof req.body === 'undefined' || req.body === null) { return sendBodyError(res, 'Aucunes données') }

            //Variables
            const email = req.body.email
            const password = req.body.password

            //Vérifications du nombre de caractères
            if(
              email != undefined && email.length > 4 &&
              password != undefined && password.length > 4
            ){
                //On parcourt tous les users de la liste
              for(let item of userCollection){
                //On vérifie les identifiants
                if(email == item.email && password == item.password){
                  
                    //Création d'un cookie pour savoir quel user est connecté
                   res.cookie('emailCookie',email)
                  return res.json(req.body)
                }
              }
             
              //Sinon on retourne null
              return res.json(null)
             
            }      
          });
        //

    
    };

    /* 
    Initialize routes 
    !! Don't edit this code unless you are sure of what you do !!
    */
    init(){
        this.routes();
        return router;
    };
  };
//


/*
Export class
!! Don't edit this code unless you are sure of what you do !!
*/
    module.exports = ApiRouterClass;
//