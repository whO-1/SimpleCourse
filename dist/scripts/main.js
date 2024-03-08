import ObjectUpdater from "./ObjectUpdater.js";
import { checkSectionsinView, navDecorate } from "./navbarScroll.js";
import { checkSection, fadeSection } from "./fadeSection.js";

//links-update
const anchors = document.querySelectorAll("a.nav-link[href^='#']");
const sections = [];
for(let i=0;i<anchors.length;i++ ){
    sections.push(  document.querySelector(   anchors[i].getAttribute("href")  )  );    
}

//fade-section-pricing
const pricingSection = document.querySelector("#section-pricing");
pricingSection.classList.add("hide-section");


//fade cards 
const cards  = document.querySelectorAll(".accordion-item");


const fadeCards = [];
for(let i=0; i< cards.length; i++){
    cards[i].classList.add("hide-section");
    fadeCards.push( new ObjectUpdater( 
        checkSection, 
        fadeSection, 
        {element: cards[i], offsetY: 0.8, className: "show-section"}, 
        {element:cards[i], addClassName:"show-section", deleteClassName:"hide-section"},
        false
    ));     
}

const activeSectionNavbar = new ObjectUpdater( 
    checkSectionsinView , 
    navDecorate, 
    {items: sections , offsetY: 0.8 }, 
    {items:sections, links:anchors}, 
    "" 
);

const fadeSectionPricing = new ObjectUpdater( 
    checkSection, 
    fadeSection, 
    {element: pricingSection, offsetY: 0.8, className: "show-section"}, 
    {element:pricingSection, addClassName:"show-section", deleteClassName:"hide-section"},
    false
);
 



document.addEventListener( "scroll", () => {
    activeSectionNavbar.update();
    fadeSectionPricing.update();
    fadeCards.forEach( card => card.update() );
});