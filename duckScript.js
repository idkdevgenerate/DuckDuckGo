console.log("connected");

const hamburgerIcon = document.getElementById('hamburger');
const hamburgerLinks = document.getElementById('hamburger-links');
const xButton = document.getElementById('X');
const megaphone = document.getElementById('megaphone-chevron');
const megaphoneMenu = document.querySelector('.megaphone-menu');

//EVENT LISTENERS
hamburgerIcon.addEventListener('click', () => {
    hamburgerLinks.classList.toggle('hamburger-links-open');
    console.log("hamburgerIcon clicked");
});

xButton.addEventListener('click', () => {
    hamburgerLinks.classList.toggle('hamburger-links-open');
    console.log("XButton clicked");
});
megaphone.addEventListener('click', () => {
    megaphoneMenu.classList.toggle('megaphone-menu-visible');
    console.log("megaphone clicked");
});


const accordionButtons = document.querySelectorAll('.chevron-and-title');
const allAccordionParagraphs = document.querySelectorAll('.accordion-content');
console.log("Accordion Buttons returns as: " + accordionButtons);
console.log("allAccordionParagraphs returns as: " + accordionButtons);

accordionButtons.forEach(accordion => {
    accordion.addEventListener('click', e => {
        const paragraphContent = accordion.nextElementSibling;

        //IF THIS ACCORDION THATS CLICKED IS ALREADY OPEN, CLOSE IT
        if (paragraphContent.classList.contains('accordion-content-visible')) {
            paragraphContent.classList.remove('accordion-content-visible')
        }
        else {
            //RESET ALL ACCORDIONS TO CLOSED
            for (i=0; i < allAccordionParagraphs.length; i++) {
                if(allAccordionParagraphs[i].classList.contains('accordion-content-visible')){
                    
                    allAccordionParagraphs[i].classList.remove('accordion-content-visible');
                }
            }

            //OPEN UP THE ACCORDION CLICKED
            console.log("the sibling is " + accordion.nextElementSibling);
            paragraphContent.classList.add('accordion-content-visible');
        }
    

       
    })
});