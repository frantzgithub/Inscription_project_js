
listEmail = [];
function ajouter(){
    const nom = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const selection = document.querySelector("select").value;
    
    const section = document.getElementById("js-section");
    
    if(nom == ""){
        alert("vous devez entrer votre nom");
    }else if(email == ""){
        alert("vous devez entrer votre email");
    }else if(age == ""){
        alert("vous devez entrez votre age");
    }else if(selection == ""){
        alert("vous devez choisir un langage de programmation pour que nous ayons toutes les informations");
    }else{
        if(email.endsWith("@gmail.com") && listEmail.indexOf(email) < 0){
    section.innerHTML += ` 
          <div class="add__element div__element section">
            <p>${nom}</p>
            <p class="email">${email}</p>
            <p>${age}</p>
            <p>${selection}</p>
          </div>`;
          listEmail.push(email);
          nettoyer();
        }else{ 
            alert("email est incorrect!! vérifie si l'email existe dejá dans la liste où s' il y a un problème d'orthographe");
    }
    
}
}

function nettoyer() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";

    document.querySelector("select").value = "";
}
