function myFunction(){

    let nom = document.querySelector("#nom");
    let messagea = document.querySelector("#messagea");
    messagea.innerHTML = nom.value;

    let email = document.querySelector("#email");
    let messageb = document.querySelector("#messageb");
    messageb.innerHTML = email.value;

    let satisfaction = document.querySelector("#satisfaction");
    let messagec = document.querySelector("#messagec");
    messagec.innerHTML = satisfaction.value;

    let prof = document.querySelector("#prof");
    let messaged = document.querySelector("#messaged");
    messaged.innerHTML = prof.value;

    let texte = document.querySelector("#texte");
    let messagee = document.querySelector("#messagee");
    messagee.innerHTML = texte.value;
}

