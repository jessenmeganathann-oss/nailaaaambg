// ===========================
// ELEMENTS
// ===========================
const envelope =
    document.getElementById("envelope");

const flowerExplosion =
    document.getElementById(
        "flowerExplosion"
    );

const afterOpen =
    document.getElementById(
        "afterOpen"
    );

const introScreen =
    document.getElementById(
        "introScreen"
    );

const enterWorldBtn =
    document.getElementById(
        "enterWorldBtn"
    );

const app =
    document.getElementById("app");

const music =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");

const heartsContainer =
    document.querySelector(
        ".hearts-container"
    );

const navButtons =
    document.querySelectorAll(
        ".nav-btn"
    );

const pages =
    document.querySelectorAll(
        ".page"
    );

const noBtn =
    document.getElementById("noBtn");

const yesBtn =
    document.querySelector(".yes-btn");

const gameText =
    document.getElementById("gameText");

const heartGame =
    document.getElementById("heartGame");

const scoreElement =
    document.getElementById("score");

// ===========================
// FLOWER EXPLOSION
// ===========================
let opened = false;

envelope.addEventListener(
    "click",
    () => {

        if(opened) return;
        opened = true;

        envelope.style.transform =
            "scale(.6) rotate(20deg)";

        envelope.style.opacity =
            "0";

        const flowers = [

            "images/rose.png",
            "images/sakura.png",
            "images/tulip.png",
            "images/peony.png",
            "images/hibiscus.png",
            "images/petals.png"

        ];

// FLOWER CINEMATIC
        for(let i = 0; i < 120; i++){

            const flower =
                document.createElement("img");

            // random flower
            flower.src =
                flowers[
                    Math.floor(
                        Math.random() *
                        flowers.length
                    )
                    ];

            flower.classList.add(
                "flower"
            );

            // posisi random
            flower.style.left =
                Math.random() *
                window.innerWidth
                + "px";

            flower.style.top =
                Math.random() *
                window.innerHeight
                + "px";

            // ukuran random
            flower.style.width =
                Math.random() * 120
                + 40 + "px";

            // opacity
            flower.style.opacity =
                Math.random() * 0.8 + 0.2;

            // rotasi random
            flower.style.transform =
                `rotate(${Math.random()*360}deg)`;

            // animasi random
            flower.style.animationDuration =
                Math.random()*6+4
                +"s";

            flowerExplosion
                .appendChild(flower);

            // animasi muncul delay
            setTimeout(()=>{

                flower.style.opacity = 1;

            },i*20);
        }

        setTimeout(()=>{

            afterOpen
                .classList
                .remove("hidden");

        },1200);

        // play music
        music.play()
            .catch(()=>{});
    });

// ===========================
// ENTER WEBSITE
// ===========================
enterWorldBtn.addEventListener(
    "click",
    ()=>{

        introScreen.style.transition =
            "1.2s";

        introScreen.style.opacity =
            "0";

        setTimeout(()=>{

            introScreen.remove();

            app.classList.remove(
                "hidden"
            );

        },1200);
    });

// ===========================
// NAVIGATION SYSTEM
// ===========================
navButtons.forEach(button=>{

    button.addEventListener(
        "click",
        ()=>{

            navButtons.forEach(
                b=>b.classList
                    .remove("active")
            );

            button.classList
                .add("active");

            const pageId =
                button.dataset.page;

            pages.forEach(page=>{

                page.classList
                    .remove(
                        "active-page"
                    );
            });

            document
                .getElementById(
                    pageId
                )
                .classList
                .add(
                    "active-page"
                );
        });
});

// ===========================
// MUSIC TOGGLE
// ===========================
musicBtn.addEventListener(
    "click",
    ()=>{

        if(music.paused){

            music.play();

            musicBtn.innerHTML =
                "🎵";

        }else{

            music.pause();

            musicBtn.innerHTML =
                "🔇";
        }
    });

// ===========================
// LOVE RAIN
// ===========================
function createHeart(){

    const heart =
        document.createElement(
            "div"
        );

    heart.innerHTML = "❤️";

    heart.style.position =
        "absolute";

    heart.style.left =
        Math.random()*100
        +"vw";

    heart.style.top =
        "-30px";

    heart.style.fontSize =
        Math.random()*20
        +20+"px";

    heart.style.animation =
        `fall ${
            Math.random()*3+4
        }s linear`;

    heartsContainer
        .appendChild(
            heart
        );

    setTimeout(()=>{

        heart.remove();

    },7000);
}

setInterval(
    createHeart,
    350
);

// ===========================
// GAME NO BUTTON
// ===========================
const sadTexts = [

    "Really? 😢",
    "Are you sure? 🥺",
    "Please don't 😭",
    "You broke my heart 💔",
    "One more chance? 🥹"
];

let textIndex = 0;

noBtn.addEventListener(
    "mouseover",
    ()=>{

        const x =
            Math.random()*300
            -150;

        const y =
            Math.random()*200
            -100;

        noBtn.style.transform =
            `translate(${x}px,
    ${y}px)`;

        gameText.innerText =
            sadTexts[
            textIndex %
            sadTexts.length
                ];

        textIndex++;
    });

// ===========================
// YES BUTTON
// ===========================
yesBtn.addEventListener(
    "click",
    ()=>{

        gameText.innerHTML =
            "AWWW ❤️ Thank You 🌸";

        for(let i=0;i<60;i++){

            createHeart();
        }
    });

// ===========================
// HEART GAME
// ===========================
let score = 0;

function spawnHeartGame(){

    const heart =
        document.createElement(
            "div"
        );

    heart.innerHTML = "💖";

    heart.style.position =
        "absolute";

    heart.style.cursor =
        "pointer";

    heart.style.fontSize =
        "40px";

    heart.style.left =
        Math.random()*80
        +"%";

    heart.style.top =
        Math.random()*80
        +"%";

    heartGame
        .appendChild(
            heart
        );

    heart.onclick = ()=>{

        score++;

        scoreElement
            .innerText =
            score;

        heart.remove();

        for(let i=0;i<8;i++){
            createHeart();
        }
    };

    setTimeout(()=>{

        heart.remove();

    },2500);
}

setInterval(
    spawnHeartGame,
    1600
);

// ===========================
// EXTRA CSS
// ===========================
const style =
    document.createElement(
        "style"
    );

style.innerHTML = `
@keyframes fall{

0%{
transform:
translateY(0);
opacity:1;
}

100%{
transform:
translateY(110vh);
opacity:0;
}
}
`;

document.head
    .appendChild(style);