/*==============    scrollReveall   =================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration:2000,
    delay: 200
});


ScrollReveal().reveal('.info,', { origin: 'top'});
ScrollReveal().reveal('.container-img, .section-clientes h2, .section-clientes h3, .slider', { origin: 'bottom'});
ScrollReveal().reveal('.section-texto .container, .container-services, .info', { origin: 'right'});
ScrollReveal().reveal('.section-services h2, .section-services h3, .footer, .section-conocenos .container', { origin: 'left'});
ScrollReveal().reveal('.headline');