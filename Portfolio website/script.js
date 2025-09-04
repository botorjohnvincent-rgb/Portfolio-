/*=================================toggle icon navbar=====================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*================================= scroll reveal=====================================*/

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading',  {origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .project-box, .contact form', { origin: 'buttom'});
ScrollReveal().reveal('.home-contact-h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});


