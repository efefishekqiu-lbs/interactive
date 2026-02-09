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