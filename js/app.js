document.documentElement.style .setProperty('--primary', '#0973cf');
document.documentElement.style .setProperty('--secondary', '#b3cde0');
document.documentElement.style .setProperty('--tertiary', '#FAFAFA');
document.documentElement.style .setProperty('--quaternary', '#0903cf');
document.documentElement.style .setProperty('--border', '#d8d8d8');
document.documentElement.style .setProperty('--page-max-width', '1268px');

document.documentElement.style .setProperty('--navbar-background', 'var(--white)');
document.documentElement.style .setProperty('--navbar-text-color', 'var(--primary)');

document.documentElement.style .setProperty('--header-background', '#fafafa');
document.documentElement.style .setProperty('--header-text-color', '#000');

document.documentElement.style .setProperty('--footer-background', 'var(--white)');
document.documentElement.style .setProperty('--footer-text-color', 'black');

document.documentElement.style .setProperty('--h1-color', 'black');
document.documentElement.style .setProperty('--h2-color', '#000');
document.documentElement.style .setProperty('--h3-color', '#262626');
document.documentElement.style .setProperty('--seo-page-title-color', 'blue');


const navbar_data = [
   {
         brand: "Cheap Healthcare Plan",
   }
];

function navbar_template(navbar) {
   return `
    <div class="menu flex-center">
        <h1 class="brand"> ${navbar.brand}</h1>
    </div>
 `;
}

document.getElementById("navbar").innerHTML = `${navbar_data.map(navbar_template).join('')}`;


const footer_data = [
   {
       brand: "Cheap Healthcare Plan",
   }
];
function footer_template(foot) {
    return `
    <div class="footer">
     <div class="grid set-cols-1">
       <div class="column flex-center">
         <h2 class="copyright"> Copyright<a href="/#"> ${foot.brand}</a>. All rights reserved <span id="year"></span> </h2>
       </div>

       <nav class="nav-menu flex-center">
            <a href="privacy.html">Privacy</a> |
            <a href="terms.html">Term of Use</a>
        </nav>
     </div>
    </div>
  `;
}

document.getElementById("footer").innerHTML = `${footer_data.map(footer_template).join('')}`;
document.getElementById("year").innerHTML = new Date().getFullYear();
