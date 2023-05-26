const sr = ScrollReveal ({
    distance: `4rem`,
    duration: 2600,
    delay: 450,
    reset: true 
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});