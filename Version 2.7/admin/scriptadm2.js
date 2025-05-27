document.getElementById("de-connextion-adm").addEventListener("click", function () {
    let response = confirm("Voulez-vous continuer? Cela vous deconnecteras automatiquemment");
    if (response) {
        alert("Decconextion réussit, cliquer sur (OK)");
        window.location.href = "file:///C:/Users/romeo/OneDrive/Bureau/Html%20Wix/Html/Code/Fake%20ent/Version%202.6/accueil/index%20(5).html";
}   else {
        alert("Annulation réussit !");
}

})
document.getElementById("infos-adm").addEventListener("click", function () {
    let response = confirm("Vous allez acceder à la liste des alertes, entrer les codes ADM pour confirmer votre identitée :");
}

);