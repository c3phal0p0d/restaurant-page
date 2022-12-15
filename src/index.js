function loadMainPage(){
    const content = document.querySelector('#content');

    // Heading section
    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading-container");
    content.appendChild(headingContainer);
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    headingContainer.appendChild(titleContainer);
    const smallText1 = document.createElement("span");
    smallText1.classList.add("title");
    smallText1.classList.add("small-text");
    smallText1.appendChild(document.createTextNode("The"));
    titleContainer.appendChild(smallText1);
    const largeText = document.createElement("h1");
    largeText.classList.add("title");
    largeText.classList.add("large-text");
    largeText.appendChild(document.createTextNode("Double R"));
    titleContainer.appendChild(largeText);
    const smallText2 = document.createElement("span");
    smallText2.classList.add("title");
    smallText2.classList.add("small-text");
    smallText2.appendChild(document.createTextNode("Diner"));
    titleContainer.appendChild(smallText2);

    // Navigation section
    const navigationContainer = document.createElement('div');
    navigationContainer.classList.add("navigation-container");
    content.appendChild(navigationContainer);
    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'Home';
    aboutButton.classList.add('about-button');
    navigationContainer.appendChild(aboutButton);
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('menu-button');
    navigationContainer.appendChild(menuButton);
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('contact-button');
    navigationContainer.appendChild(contactButton);

    // About section
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    content.appendChild(aboutContainer);
    const aboutHeading = document.createElement('h2');
    aboutHeading.appendChild(document.createTextNode('About'))
    aboutContainer.appendChild(aboutHeading);
    const aboutText = document.createElement('p');
    aboutText.appendChild(document.createTextNode('Located in the idyllic town of Twin Peaks...'));
    aboutContainer.appendChild(aboutText);
    aboutContainer.appendChild(document.createElement('hr'));


    // Testimonials section
    const testimonialsContainer = document.createElement('div');
    testimonialsContainer.classList.add('testimonials-container');
    content.appendChild(testimonialsContainer);
    const testimonialsHeading = document.createElement('h2');
    testimonialsHeading.appendChild(document.createTextNode('Testimonials'))
    testimonialsContainer.appendChild(testimonialsHeading);
    const testimonial1 = document.createElement('p');
    testimonial1.appendChild(document.createTextNode('"Damn fine cup of coffee!" - Special Agent Dale Cooper'));
    testimonialsContainer.appendChild(testimonial1);
    const testimonial2 = document.createElement('p');
    testimonial2.appendChild(document.createTextNode('"This cherry pie is a miracle." - Log Lady'));
    testimonialsContainer.appendChild(testimonial2);
    testimonialsContainer.appendChild(document.createElement('hr'));

    // Footer section
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container')
    content.append(footerContainer);
}

loadMainPage();