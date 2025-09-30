//Mobile Nav schliessen
//https://cdn.jsdelivr.net/gh/Gramatica-Design/script@v1.0.0/dropdown_footer.js
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.w-nav-button');
  const menu = document.querySelector('.w-nav-menu');

  // Klick auf jeglichen Link innerhalb des Nav-Menüs
  menu.addEventListener('click', function (event) {
    const clickedLink = event.target.closest('a'); // sichert auch Verschachtelungen ab

    if (clickedLink && menu.hasAttribute('data-nav-menu-open')) {
      // Schliessen nur bei internen Links (optional)
      const href = clickedLink.getAttribute('href') || '';
      const isAnchor = href.startsWith('#') || href.startsWith('/') || href.includes(window.location.hostname);

      if (isAnchor) {
        hamburger.click(); // Mobile Menü schliessen
      }
    }
  });
});