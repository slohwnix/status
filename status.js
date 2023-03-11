const status = {
  "wiki-bot": "",
  "koyoweb": ""
};

fetch('https://api.slohweb.ml/proxy.php?url=https://wiki-bot.slohweb.ml/')
  .then(response => response.text())
  .then(text => {
    if (text.indexOf("Wiki-bot") !== -1) {
      status["wiki-bot"] = "OK";
    } else {
      status["wiki-bot"] = "ERROR";
    }
  })
  .catch(error => {
    status["wiki-bot"] = "ERROR";
  });

fetch('https://api.slohweb.ml/proxy.php?url=https://koyoweb.slohweb.ml/')
  .then(response => response.text())
  .then(text => {
    if (text.indexOf("Koyoweb") !== -1) {
      status["koyoweb"] = "OK";
    } else {
      status["koyoweb"] = "ERROR";
    }
  })
  .catch(error => {
    status["koyoweb"] = "ERROR";
  });

// Attendre que les deux requêtes se terminent avant d'afficher le résultat
Promise.all([
  fetch('https://api.slohweb.ml/proxy.php?url=https://wiki-bot.slohweb.ml/'),
  fetch('https://api.slohweb.ml/proxy.php?url=https://koyoweb.slohweb.ml/')
])
  .then(() => {
    const statusElement = document.getElementById("status");
    if (status["wiki-bot"] === "OK" && status["koyoweb"] === "OK") {
      statusElement.innerHTML = "Les deux sites sont en ligne.";
      statusElement.className = "green";
    } else {
      statusElement.innerHTML = "Un ou plusieurs sites sont hors ligne.";
      statusElement.className = "red";
    }
  })
  .catch(error => {
    console.error(error);
  });
