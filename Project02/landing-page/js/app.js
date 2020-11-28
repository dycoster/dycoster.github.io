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

function deactivateSections() {
    sections.forEach((element)=> {
    element.classList.remove('your-active-class');
    });
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navLinks() {
	sections.forEach((element)=>{
	    let listItem = document.createElement("li");
    	let sectionName = element.getAttribute("data-nav");
    	let currentSectionId = element.getAttribute("id");
        listItem.innerHTML = `<a href="#${currentSectionId}" class="menu__link">${sectionName}</a>`;
        navBarList.appendChild(listItem);
    });
}


// Add class 'active' to section when near top of viewport
function activeSection() {
    let sectionNum = section[0];
    let rectValue = 1000000;

    for (let section of sections) {
        let rect = section.getBoundingClientRect();
        if(rect.top>-300 & rect.top<rectValue) {
            rectValue = rect.top;
            sectionNum = section;
        }
    }
    return sectionNum;
};
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu

navLinks();

// Scroll to section on link click
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

scrollToClick();
// Set sections as active

function addActiveClass() {
    window.addEventListener('scroll', function() {
        let _section = activeSection();
        _section.classlist.add('your-active-class')
    });
}
addActiveClass();
