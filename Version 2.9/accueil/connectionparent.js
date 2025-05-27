document.getElementById("coparent").addEventListener("click", function () {
  const id = document.getElementById("IDparent").value.trim();
  const mdp = document.getElementById("MDPparent").value.trim();
  const message = document.getElementById("messageErreur-parent");

  // Masquer le message au départ
  message.style.display = "none";

  // Vérifier les champs
  if (!id || !mdp) {
    message.textContent = "Veuillez remplir tous les champs.";
    message.style.color = "red";
    message.style.display = "block";
    return;
  }

  const identifiantsValidés = {
    "parent123": "mdp123",
    "alpha": "alpha"
  };

  if (identifiantsValidés[id] === mdp) {
    // Succès
    window.location.href = "file:///C:/Users/romeo/OneDrive/Bureau/Html%20Wix/Html/Code/Fake%20ent/Z%20Derni%C3%A8re%20Version/enfant%20-%20parent/alpha.html";
  } else {
    message.textContent = "Identifiant ou mot de passe incorrect.";
    message.style.color = "red";
    message.style.display = "block";
  }
});
