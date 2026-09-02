// =========================================
// KSA FISHERIES — PREMIUM WEBSITE SCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------------
    // PAGE LOADER
    // -------------------------------------

    const loader = document.querySelector(".page-loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 500);
    });


    // -------------------------------------
    // NAVBAR SCROLL EFFECT
    // -------------------------------------

    const navbar = document.querySelector(".navbar");

    function updateNavbar(){
        if(window.scrollY > 40){
            navbar.classList.add("scrolled");
        }else{
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();


    // -------------------------------------
    // MOBILE MENU
    // -------------------------------------

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if(menuBtn && mobileMenu){

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if(mobileMenu.classList.contains("active")){
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
                document.body.classList.add("no-scroll");
            }else{
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
                document.body.classList.remove("no-scroll");
            }

        });


        // Close mobile menu after clicking link

        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

                document.body.classList.remove("no-scroll");

            });

        });

    }


    // -------------------------------------
    // SMOOTH SCROLL
    // -------------------------------------

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            const targetId = this.getAttribute("href");

            if(targetId === "#"){
                return;
            }

            const target = document.querySelector(targetId);

            if(target){

                e.preventDefault();

                const navbarHeight = navbar.offsetHeight;

                const position =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({
                    top:position,
                    behavior:"smooth"
                });

            }

        });

    });


    // -------------------------------------
    // REVEAL ANIMATIONS
    // -------------------------------------

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold:0.12
        }

    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // -------------------------------------
    // GALLERY LIGHTBOX
    // -------------------------------------

    const galleryCards = document.querySelectorAll(".gallery-card");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    galleryCards.forEach(card => {

        card.addEventListener("click", () => {

            const image = card.querySelector("img");

            if(!image) return;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");
            document.body.classList.add("no-scroll");

        });

    });


    function closeGallery(){

        lightbox.classList.remove("active");
        document.body.classList.remove("no-scroll");

        setTimeout(() => {
            lightboxImage.src = "";
        }, 300);

    }


    closeLightbox.addEventListener("click", closeGallery);


    lightbox.addEventListener("click", (e) => {

        if(e.target === lightbox){
            closeGallery();
        }

    });


    // ESC key closes gallery

    document.addEventListener("keydown", (e) => {

        if(e.key === "Escape"){
            closeGallery();
        }

    });


    // -------------------------------------
    // IMAGE FALLBACK
    // -------------------------------------

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("error", () => {

            console.warn("Image could not be loaded:", img.src);

        });

    });

});
