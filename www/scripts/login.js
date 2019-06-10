document.addEventListener('DOMContentLoaded', () => {
    // Variables / Récupération des éléments
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
     msgError = document.querySelector('p');

    // Capter la soumissionn du formulaire
    document.querySelector('form').addEventListener('submit', (event) => {
        // Bloquer le comportement naturel du formulaire
         event.preventDefault();

         email.addEventListener("focus", ()=>{
            msgError.className = 'none';
         });
         password.addEventListener("focus", ()=>{
            msgError.className = 'none';
         });
         
        // Variable pour compter le nombre d'erreurs
        let formError = 0;

        // Vérifier les champs du formulaire
        if( email.value.length <= 4 ) formError++; // on peut aussi tester une regex que l'adresse mail
        if( password.value.length <= 4 ) formError++;

        // Validation s'il n'y a pas d'erreurs
        if( formError === 0 ){
            //Requête en POST avec la route api/login
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //On envoie l'email récupéré et le mot passe
                body: JSON.stringify({email: email.value, password : password.value })
            })

            //Récupération de la réponse
            .then(data => data.json())
            .then(data => { 
                //Si l'user et son mot de passe sont corrects
               if(data){
                   //Redirection vers la bonne page profil
                    redirect: window.location.replace("./me") 
                } else{
                    //Sinon il y à un erreur et on l'indique à l'utilisateur
                    msgError.className = "error";;
                    
                }
            }) 
           .catch((err) => {
                console.error(err);
            })
        }

    });
});

