const htmlContent = `<header>
    <h1>CLÉMENT LEGOUEST</h1>
    <h2>Technicien méthodes industrielles et développeur d'applications</h2>
    <nav>
      <ul>
        <li><a href="index.html">À propos</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
  </header>`;
let appHeader = document.getElementById("app_header");
let header = document.createElement("header");
header.innerHTML = htmlContent;
appHeader.replaceWith(header);