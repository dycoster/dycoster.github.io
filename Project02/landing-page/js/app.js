/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
let navBarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navLinks() {
	sections.forEach((element)=>{
	    let listItem = document.createElement("li");
    	let listName = element.getAttribute("data-nav");
    	let currentSectionId = element.getAttribute("id");
        listItem.innerHTML = `<a href="#${currentSectionId}" class="menu__link">${listName}</a>`;
        navBarList.appendChild(listItem);
    });
}


// Add class 'active' to section when near top of viewport

const check =(entries) =>
    entries.forEach(entry => {
        entry.target.classList.toggle("your-active-class", entry.isIntersecting);
});

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(check,options);

sections.forEach(section => {
    observer.observe(section);
});


// Scroll to anchor ID using scrollTO event

function scrollToClick() {
    let menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach((element) => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(element.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

navLinks();

// Scroll to section on link click

scrollToClick();

// Set sections as active