document.getElementById("de-connextion-adm").addEventListener("click", function () {
    let response = confirm("Voulez-vous continuer? Cela vous deconnecteras automatiquemment");
    if (response) {
        alert("Decconextion réussit, cliquer sur (OK)");
        window.location.href = "file:///C:/Users/romeo/OneDrive/Bureau/Html%20Wix/Html/Code/Fake%20ent/Z%20Derni%C3%A8re%20Version/accueil/index%20(5).html";
}   else {
        alert("Annulation réussit !");
}

})
document.getElementById("infos-adm").addEventListener("click", function () {
    var listeDesAlertes = document.getElementById("liste-des-alertes");
    listeDesAlertes.style.display = (listeDesAlertes.style.display === "block") ? "none" : "block";
})

document.getElementById("fermer-liste").addEventListener("click", function () {
    var listeDesAlertes = document.getElementById("liste-des-alertes");
    listeDesAlertes.style.display = (listeDesAlertes.style.display === "block") ? "none" : "block";
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("infos-site").addEventListener("click", function () {
        var infosSiteText = document.getElementById("infos-site-text");
        infosSiteText.style.display = (infosSiteText.style.display === "block") ? "none" : "block";
    });
})
document.getElementById("fermer-liste-2").addEventListener("click", function () {
    var infosSiteText = document.getElementById("infos-site-text");
    infosSiteText.style.display = (infosSiteText.style.display === "block") ? "none" : "block";
})
document.getElementById('Notifications').addEventListener('click', function() {
    // Vérifiez la source actuelle de l'image et changez-la
    if (this.src === 'https://cdn-0.emojis.wiki/emoji-pics/microsoft/bell-microsoft.png') {
        this.src = 'https://cdn-0.emojis.wiki/emoji-pics/microsoft/bell-with-slash-microsoft.png'; // Remplacez par l'URL de votre deuxième image
        this.title = 'Notifications desactivées';
    } else {
        this.src = 'https://cdn-0.emojis.wiki/emoji-pics/microsoft/bell-microsoft.png';
        this.title = 'Notifications activées';
    }
})
;