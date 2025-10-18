// for dark and light mode and other js i have learned it from the blog article and youtube video given below 
// https://javascript.plainenglish.io/build-a-dark-mode-toggle-with-javascript-and-localstorage-8022b492fb9e 
// https://www.youtube.com/watch?v=PkZNo7MFNFg&t=3144s 

// and for if else i learned it from https://www.w3schools.com/js/js_conditionals.asp 



// js for responsive navbar starts

var navbar = document.getElementById('navbar-center')
var showmenu = document.getElementById('showmenu')
var hidemenu = document.getElementById('hidemenu')

function showMenu() {
    navbar.style.opacity = "1";
    showmenu.style.display = "none";
}

function hideMenu() {
    navbar.style.opacity = "0";
    showmenu.style.display = "block";   
}

// js for responsive navbar ends


// js for the scroll up bar starts 


var scrollup = document.querySelector('.scroll-up')
window.addEventListener("scroll", function() {

    // when scroll more than 150 on why axis the if loop get started and scroll on top button is visible 
    if (window.scrollY > 150){
        scrollup.classList.add("show")
    }
    else{
        scrollup.classList.remove("show")

    }
})

// js for the scroll ends bar starts 





// color theme toggle light and dark theme starts

const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector("i");
    const html = document.documentElement;

    // Load theme from localStorage or default to light mode
    let currentTheme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", currentTheme);

    // Function to update the icon based on theme
    function updateIcon() {
        if (html.getAttribute("data-theme") === "dark") {
            icon.classList.add("ri-sun-fill");
            icon.classList.remove("ri-moon-fill");
        } else {
            icon.classList.add("ri-moon-fill");
            icon.classList.remove("ri-sun-fill");
        }
    }

    // Apply correct icon on page load
    updateIcon();

    // Toggle theme and update icon on click
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem("theme", newTheme); // Save theme preference
        updateIcon(); // Update the icon after theme change
    });

// color theme toggle light and dark theme ends





