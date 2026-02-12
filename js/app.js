let games = {
    ["streetnheists"]: {
        label: "Streets n Heists",
        thumbnail: "/assets/gamepics/snh1.png",
        video: "/assets/videos/streetsnheistgameplay.mp4",
        supportedPlatforms: {
            ["pc"]: false,
            ["ps4"]: true,
            ["xbox"]: true,
        },
        contents: {
            ["/assets/videos/streetsnheistgameplay.mp4"]: 1,
            ["/assets/gamepics/snh1.png"]: 2,
            ["/assets/gamepics/snh2.png"]: 3,
            ["/assets/gamepics/snh3.png"]: 4,
            ["/assets/gamepics/snh4.png"]: 5,
            ["/assets/gamepics/snh5.png"]: 6,
            ["/assets/gamepics/snh6.png"]: 7,
        },
        depends: {
            ["Platform"]: "Windows 10/11",
            ["Utvecklare"]: "Kosta/Adis/Leon",
            ["Tillgängligt"]: "26-02-27",
            ["Marknadsföringsinnehåll"]: "Ja",            
        },
    },
    ["parryvsgod"]: {
        label: "Parry Vs God",
        thumbnail: "/assets/gamepics/pvg1.png",
        video: "/assets/videos/parryvsgodgameplay.mp4",
        supportedPlatforms: {
            ["pc"]: true,
            ["ps4"]: true,
            ["xbox"]: true,
        },
        contents: {
            ["/assets/videos/parryvsgodgameplay.mp4"]: 1,
            ["/assets/gamepics/pvg1.png"]: 2,
            ["/assets/gamepics/pvg2.png"]: 3,
            ["/assets/gamepics/pvg3.png"]: 4,
            ["/assets/gamepics/pvg4.png"]: 5,
            ["/assets/gamepics/pvg5.png"]: 6,
            ["/assets/gamepics/pvg6.png"]: 7,
        },
        depends: {
            ["Platform"]: "Windows 10/11",
            ["Utvecklare"]: "Kosta/Adis/Leon",
            ["Tillgängligt"]: "26-02-27",
            ["Marknadsföringsinnehåll"]: "Ja",            
        },
    },
}

let currentGame = "streetnheists"
function selectGame(id) {
    if (games[id]) {
        let data = games[id];
        currentGame = id;
        $(".selected-game-platforms>img").hide()
        $.each(data.supportedPlatforms, function(k, v) {
            if (v == true) {
                $(`.selected-game-platforms>img[data-type="${k}"]`).show()
            }
        })
        $(".selected-game-name, .game-label").html(data.label)
        $(".video").attr("src", data.video)
        $(".selected-game-bg, .selected-game-profile-thumbnail").attr("src", data.thumbnail)
        $(".game-element").removeClass("game-selected")
        $(`.game-element[data-id="${id}"]`).addClass("game-selected")
        $(".slide-track>img").hide()
        $(`.slide-track>img[data-game="${id}"]`).show()
    }
}

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
                "backdrop-filter": "blur(5px)",
                "border": "1px solid hsla(0, 0%, 100%, .2)",
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
                "border-bottom": "1px solid hsla(0, 0%, 100%, .2)",
                "backdrop-filter": "none",
                "transform": "none",
                "box-shadow": "rgba(78, 78, 78, 0.173) 0px 30px 60px -12px, rgba(0, 0, 0, 0.375) 0px 18px 36px -18px"
            });
        }
    }
});

$(document).on("click", ".game-element", function () {
   selectGame($(this).attr("data-id"))
})

function logoReload() {
    let circle = $("#logo-circle");
    let x = $("#logo-x");
    let both = $("#logo-both");
    let logo = $("#logo-real");

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
    setTimeout(() => {
        x.css({ opacity: 1, transform: "scale(1.2)" });
    }, 850);
    setTimeout(() => {
        x.css({ transition: "all 0.35s ease", transform: "scale(0.7)" });
    }, 1000);
    setTimeout(() => {
        x.css({ transform: "scale(1.06) rotate(180deg)" });
    }, 1300);
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
    $('.video')[0].play(); 
    selectGame("streetnheists")
    openGamePage("streetnheists")
});


$(document).on("click", ".faq-wrapper-item", function () {
    if ($(this).hasClass("faq-wrapper-item-active")) {
        $(this).removeClass("faq-wrapper-item-active");
    } else {
        $(".faq-wrapper-item").removeClass("faq-wrapper-item-active");
        $(this).addClass("faq-wrapper-item-active");
    }
});

let currentOpenedGame = "null";
function openGamePage(id) {
    if (games[id]) {
        currentOpenedGame = id;
        $("body").css("overflow", "hidden")
        let data = games[id];
        $(".gamepage-contentScreen>video").hide()
        $(".gamepage-contentScreen>img").attr("src", data.thumbnail)

        $(".gamepage-footerWrapper-contents").html("")
        $.each(data.contents, function(k, v) {
            let content = `<img src="${k}" alt="${k} content">`
            if (isUrlVideo(k) == true) {
                content = `<video class="as" src="${k}" muted playsinline paused preload="metadata"></video>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>`
            }
            
            $(".gamepage-footerWrapper-contents").append(`
                <div class="gamepage-footerWrapper-contents-box" data-id="${v}">
                    ${content}
                </div>
            `)
        })
        $(".gamepage-dependsWrapper").html("")
        $.each(data.depends, function(k, v) {
            $(".gamepage-dependsWrapper").append(`
                <div class="gamepage-dependsWrapper-box">
                    <h1>${k}</h1>
                    <h2>${v}</h2>
                </div>    
            `)
        })
        setTimeout(() => {
            $('.as')[0].pause(); 
        }, 100);
        selectGamePageContent(1)
    }
}

$(document).on("click", ".gamepage-footerWrapper-contents-box", function () {
    selectGamePageContent($(this).attr("data-id"))
})

function selectGamePageContent(id) {
    if (games[currentOpenedGame]) {
        $(".gamepage-footerWrapper-contents-box").removeClass("gamepage-footerWrapper-contents-box-selected")
        $.each(games[currentOpenedGame].contents, function(k, v) {
            if (v == id) {
                if (isUrlVideo(k) == true) {
                    $(".gamepage-contentScreen>img").hide()
                    $(".gamepage-contentScreen>video").attr("src", k).show()
                    $('.gamepage-contentScreen>video')[0].play(); 
                } else {
                    $(".gamepage-contentScreen>video").hide()
                    $(".gamepage-contentScreen>img").attr("src", k).show()
                }
                $(`.gamepage-footerWrapper-contents-box[data-id="${id}"]`).addClass("gamepage-footerWrapper-contents-box-selected")
                return true
            }
        })
    }
}

function smoothHorizontalScroll(element, distance) {
    const start = element.scrollLeft;
    const startTime = performance.now();

    function animate(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / 300, 1);

        element.scrollLeft = start + distance * easeInOut(progress);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    function easeInOut(t) {
        return t < 0.5
            ? 2 * t * t
            : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    requestAnimationFrame(animate);
}

$(document).on("click", ".gamepage-footerWrapper-leftButton", function () {
    const container = $(".gamepage-footerWrapper-contents")[0];
    smoothHorizontalScroll(container, -350);
});

$(document).on("click", ".gamepage-footerWrapper-rightButton", function () {
    const container = $(".gamepage-footerWrapper-contents")[0];
    smoothHorizontalScroll(container, 350);
});

function isUrlVideo(url) {
    const videoExtensions = [
        "mp4", "webm", "ogg", "mov", "mkv", "avi", "flv", "avif"
    ];
    try {
        const cleanUrl = url.split("?")[0].split("#")[0];
        const ext = cleanUrl.split(".").pop().toLowerCase();

        return videoExtensions.includes(ext);
    } catch {
        return false;
    }
}