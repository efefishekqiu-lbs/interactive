let isHeaderMinimized = false;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        if (!isHeaderMinimized) {
            isHeaderMinimized = true;
            $("header").css({
                "position": "fixed",
                "top": "3vh",
                "left": "50%",
                "width": "85%",
                "border-radius": "15px",
                "background-color": "#1413136b",
                "backdrop-filter": "blur(5px)",
                "border": "1px solid #555454",
                "height": "50px",
                "transform": "translateX(-50%)",
                "box-shadow": "rgba(78, 78, 78, 0.173) 0px 30px 60px -12px, rgba(0, 0, 0, 0.375) 0px 18px 36px -18px"
            });
        }
    } else {
        if (isHeaderMinimized) {
            isHeaderMinimized = false;
            $("header").css({
                "position": "absolute",
                "top": "0",
                "left": "0",
                "width": "100%",
                "height": "90px",
                "border-radius": "0",
                "border": "none",
                "background-color": "#141313",
                "backdrop-filter": "none",
                "transform": "none",
                "box-shadow": "rgba(78, 78, 78, 0.173) 0px 30px 60px -12px, rgba(0, 0, 0, 0.375) 0px 18px 36px -18px"
            });
        }
    }
});

$(document).on("click", ".game-element", function () {
   $(".game-element").removeClass("game-selected")
   $(this).addClass("game-selected")
})

function logoReload() {
    let circle = $("#logo-circle");
    let x = $("#logo-x");
    let both = $("#logo-both");
    let logo = $("#logo-real");

    // ===== CIRCLE =====
    circle.css({ opacity: 1, transform: "scale(1.5)" });

    setTimeout(() => {
        circle.css({ transition: "all 0.35s ease", transform: "scale(0.7)" });
    }, 100);

    setTimeout(() => {
        circle.css({ transform: "scale(1.1)" });
    }, 450);

    setTimeout(() => {
        circle.css({ transform: "scale(0)", opacity: 0 });
    }, 750);


    // ===== X =====
    setTimeout(() => {
        x.css({ opacity: 1, transform: "scale(1.2)" });
    }, 850);

    setTimeout(() => {
        x.css({ transition: "all 0.35s ease", transform: "scale(0.7)" });
    }, 1000);

    setTimeout(() => {
        x.css({ transform: "scale(1.06) rotate(180deg)" });
    }, 1300);


    // ===== BOTH =====
    setTimeout(() => {

        x.css({ opacity: 0, transform: "scale(0)" });

        both.css({
            opacity: 1,
            transform: "scale(0.4)",
            transition: "all 0.35s ease"
        });

    }, 1650);

    setTimeout(() => {
        both.css({ transform: "scale(1.1)" });
    }, 1750);

    setTimeout(() => {
        both.css({ transform: "scale(0.95)" });
    }, 2050);
    setTimeout(() => {
        both.css({ opacity: "0" });
        setTimeout(() => {
            logo.css({
                opacity: 1,
                transform: "scale(1.01)" 
            });
        }, 100);
    }, 2300);
}

$(document).ready(function () {
    logoReload()
});