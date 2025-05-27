document.getElementById("de-connextion-adm").addEventListener("click", function () {
    let response = confirm("Voulez-vous continuer? Cela vous deconnecteras automatiquemment");
    if (response) {
        alert("Vous allez vous faire decconecter puis redirigez vers l'accueil");
        window.location.href = "file:///C:/Users/romeo/OneDrive/Bureau/Html%20Wix/Html/Code/Fake%20ent/Version%202.6/accueil/index%20(5).html";
}   else {
        alert("Annulation réussit !");
}

})
document.getElementById("infos-adm").addEventListener("click", function () {
    let response = confirm("Vous allez acceder à la liste des alerts, entrer les code ADM pour confirmer votre identitée :");
}

);