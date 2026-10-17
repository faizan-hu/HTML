document.addEventListener("DOMContentLoaded", function () {

    console.log("Zomato website loaded");

    const header = document.querySelector("header");
    const logo = document.querySelector("main > img");
    const searchBox = document.querySelector("main input");

    /* Header scroll effect */

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.background = "rgba(0, 0, 0, 0.8)";
            header.style.backdropFilter = "blur(10px)";

        } else {

            header.style.background = "transparent";
            header.style.backdropFilter = "none";

        }

    });


    /* Logo hover */

    if (logo) {

        logo.addEventListener("mouseenter", function () {

            logo.style.transform = "scale(1.08)";
            logo.style.transition = "0.3s";

        });

        logo.addEventListener("mouseleave", function () {

            logo.style.transform = "scale(1)";

        });

    }


    /* Input animation */

    if (searchBox) {

        searchBox.addEventListener("focus", function () {

            searchBox.style.transform = "translateY(-4px)";

        });

        searchBox.addEventListener("blur", function () {

            searchBox.style.transform = "translateY(0)";

        });

    }

});