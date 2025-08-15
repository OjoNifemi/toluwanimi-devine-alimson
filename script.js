document.addEventListener("DOMContentLoaded",() => {
    const typedElement = document.querySelector(".auto-typed");
    if (typedElement) {
        new Typed(".auto-typed", {
            strings: ["Project Manager", "Business Administrator", "Creative Entrepreneur"],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true,
        });
    } 
})