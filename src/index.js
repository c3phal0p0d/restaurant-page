function loadHomePage(){
    const content = document.querySelector('#content');
    content.innerHTML = "";

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

    // About section
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    content.appendChild(aboutContainer);
    const aboutHeading = document.createElement('h2');
    aboutHeading.appendChild(document.createTextNode('About'))
    aboutContainer.appendChild(aboutHeading);
    const aboutText = document.createElement('p');
    aboutText.appendChild(document.createTextNode('Located in the idyllic town of Twin Peaks is a favorite destination among both tourists and locals. We serve a variety of delicious food all day long, including our famed cherry pie and coffee.'));
    aboutContainer.appendChild(aboutText);
    aboutContainer.appendChild(document.createElement('hr'));


    // Testimonials section
    const testimonialsContainer = document.createElement('div');
    testimonialsContainer.classList.add('testimonials-container');
    content.appendChild(testimonialsContainer);
    const testimonialsHeading = document.createElement('h2');
    testimonialsHeading.appendChild(document.createTextNode('Reviews'))
    testimonialsContainer.appendChild(testimonialsHeading);
    const testimonial1 = document.createElement('p');
    testimonial1.appendChild(document.createTextNode('"This diner, and its extraordinarily good coffee and pie, has become, I admit, something of an obsession for me." - Dale Cooper'));
    testimonialsContainer.appendChild(testimonial1);
    const testimonial2 = document.createElement('p');
    testimonial2.appendChild(document.createTextNode('"This cherry pie is a miracle." - Log Lady'));
    testimonialsContainer.appendChild(testimonial2);
    testimonialsContainer.appendChild(document.createElement('hr'));

    // Notice section
    const noticeContainer = document.createElement('div');
    noticeContainer.classList.add('notice-container');
    content.appendChild(noticeContainer);
    const noticeHeading = document.createElement('h2');
    noticeHeading.appendChild(document.createTextNode('Notice'))
    noticeContainer.appendChild(noticeHeading);
    const noticeImage = document.createElement('img');
    noticeImage.src = '/src/bob.webp';
    noticeContainer.appendChild(noticeImage);
}

function loadMenuPage() {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    // Title section
    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = 'Menu';
    content.appendChild(menuTitle);


    // Menu
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    content.appendChild(menuContainer);

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuContainer.appendChild(menuItem1);
    let image = document.createElement('img');
    image.src = '/src/coffee.jpg';
    menuItem1.append(image);
    let itemName = document.createElement('h3');
    itemName.textContent = 'Coffee';
    menuItem1.appendChild(itemName);
    let itemText = document.createElement('p');
    itemText.textContent = "Black as midnight on a moonless night.";
    menuItem1.appendChild(itemText);
    let itemPrice = document.createElement('button');
    itemPrice.textContent = "$3";
    itemPrice.classList.add('item-price');
    menuItem1.appendChild(itemPrice);

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    menuContainer.appendChild(menuItem2);
    image = document.createElement('img');
    image.src = '/src/cherry-pie.jpg';
    menuItem2.append(image);
    itemName = document.createElement('h3');
    itemName.textContent = 'Cherry pie';
    menuItem2.appendChild(itemName);
    itemText = document.createElement('p');
    itemText.textContent = "The best in Washington state.";
    menuItem2.appendChild(itemText);
    itemPrice = document.createElement('button');
    itemPrice.textContent = "$6";
    itemPrice.classList.add('item-price');
    menuItem2.appendChild(itemPrice);

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuContainer.appendChild(menuItem3);
    image = document.createElement('img');
    image.src = '/src/donuts.jpeg';
    menuItem3.append(image);
    itemName = document.createElement('h3');
    itemName.textContent = 'Donuts';
    menuItem3.appendChild(itemName);
    itemText = document.createElement('p');
    itemText.textContent = "Detectives' favorite.";
    menuItem3.appendChild(itemText);
    itemPrice = document.createElement('button');
    itemPrice.textContent = "$4";
    itemPrice.classList.add('item-price');
    menuItem3.appendChild(itemPrice);

}

function loadContactPage() {
    const content = document.querySelector('#content');
    content.innerHTML = "";

    // Contact details section
    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');
    content.appendChild(contactDetails);
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact us';
    contactDetails.appendChild(contactTitle);
    const phone = document.createElement('p');
    phone.textContent = 'Phone: 425-831-5511';
    contactDetails.appendChild(phone);
    const email = document.createElement('p');
    email.textContent = 'Email: doublerdiner@bobmail.com'
    contactDetails.appendChild(email);
    contactDetails.appendChild(document.createElement('hr'));


    // Location section
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');
    content.appendChild(locationContainer);
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = 'Come visit!';
    locationContainer.appendChild(locationTitle);
    const locationText = document.createElement('p');
    locationText.textContent = 'We are located at 123 Main St, Twin Peaks, Washington, United States.';
    locationContainer.appendChild(locationText);
    const map = document.createElement('img');
    map.src = '/src/map.jpg';
    locationContainer.appendChild(map);
}

function renderNavigationMenu() {
    const content = document.querySelector('#content');

    const navigationContainer = document.createElement('div');
    navigationContainer.classList.add("navigation-container");
    content.appendChild(navigationContainer);
    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'Home';
    aboutButton.classList.add('about-button');
    navigationContainer.appendChild(aboutButton);
    aboutButton.addEventListener('click', function(){
        loadHomePage(); 
        renderNavigationMenu(); 
        renderFooter();
        document.querySelector(".about-button").style.backgroundColor = "rgba(188, 0, 0, 0.696)";
        document.querySelector(".menu-button").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        document.querySelector(".contact-button").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    });
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('menu-button');
    navigationContainer.appendChild(menuButton);
    menuButton.addEventListener('click', function(){
        loadMenuPage(); 
        renderNavigationMenu(); 
        renderFooter();
        document.querySelector(".about-button").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        document.querySelector(".menu-button").style.backgroundColor = "rgba(188, 0, 0, 0.696)";
        document.querySelector(".contact-button").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    });
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('contact-button');
    navigationContainer.appendChild(contactButton);
    contactButton.addEventListener('click', function(){
        loadContactPage(); 
        renderNavigationMenu(); 
        renderFooter();
        document.querySelector(".about-button").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        document.querySelector(".menu-button").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        document.querySelector(".contact-button").style.backgroundColor = "rgba(188, 0, 0, 0.696)";
    });
}

function renderFooter(){
    // Footer section
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container')
    content.append(footerContainer);
}

loadHomePage();
renderNavigationMenu();
renderFooter();
document.querySelector(".about-button").style.backgroundColor = "rgba(188, 0, 0, 0.696)";