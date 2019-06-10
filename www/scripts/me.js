  //Variables
    const btnLogOut = document.querySelector('.logOut')
    const title = document.querySelector("h2")
    var accountDetails = document.querySelector("p")
    let text = ""

    btnLogOut.addEventListener('click', (event) =>{
        document.cookie =  'emailCookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    })
