// KSA FISHERIES Premium Website Script

// Smooth scrolling for menu links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});


// Header animation on scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "rgba(255,255,255,0.95)";
    }
    else{
        header.style.background = "rgba(255,255,255,0.8)";
    }

});


// Product card reveal animation

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

// Image reveal animation

const images = document.querySelectorAll("img");

images.forEach(img=>{

    img.style.opacity="0";

    img.style.transition="1s";

    img.addEventListener("load",()=>{

        img.style.opacity="1";

    });

});
