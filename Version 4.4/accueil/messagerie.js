function getMessages() {
  return JSON.parse(localStorage.getItem("messages") || "[]");
}

function saveMessages(messages) {
  localStorage.setItem("messages", JSON.stringify(messages));
}

function envoyerMessage() {
  const expediteur = document.getElementById("expediteur").value.trim();
  const destinataire = document.getElementById("destinataire").value.trim();
  const contenu = document.getElementById("contenu").value.trim();

  if (!expediteur || !destinataire || !contenu) {
    alert("Tous les champs sont requis !");
    return;
  }

  const messages = getMessages();
  messages.push({
    de: expediteur,
    a: destinataire,
    texte: contenu,
    date: new Date().toLocaleString()
  });
  saveMessages(messages);

  alert("Message envoyé !");
  document.getElementById("contenu").value = "";
}

function afficherMessagesPour(utilisateur) {
  const messages = getMessages();
  const zone = document.getElementById("reception");
  zone.innerHTML = "";

  messages.forEach((msg, index) => {
    if (msg.a === utilisateur || msg.de === utilisateur) {
      const div = document.createElement("div");
      div.className = "message " + (msg.a === utilisateur ? "recu" : "envoye");
      div.innerHTML = `
        <strong>De :</strong> ${msg.de}<br>
        <strong>À :</strong> ${msg.a}<br>
        <strong>Date :</strong> ${msg.date}<br>
        <p>${msg.texte}</p>
        <button onclick="supprimerMessage(${index}, '${utilisateur}')">Supprimer</button>
      `;
      zone.appendChild(div);
    }
  });
}

function supprimerMessage(index, utilisateur) {
  const messages = getMessages();
  if (confirm("Supprimer ce message ?")) {
    messages.splice(index, 1);
    saveMessages(messages);
    afficherMessagesPour(utilisateur);
  }
}

// Réagit si on est sur la page de réception
document.addEventListener("DOMContentLoaded", () => {
  const inputUtilisateur = document.getElementById("utilisateur");
  if (inputUtilisateur) {
    inputUtilisateur.addEventListener("input", () => {
      const nom = inputUtilisateur.value.trim();
      if (nom) afficherMessagesPour(nom);
    });
  }
});
