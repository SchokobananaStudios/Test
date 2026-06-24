
const bananusPlayer = document.getElementById("bananusAnim");
const discordPlayer = document.getElementById("discordAnim");
const youtubePlayer = document.getElementById("youtubeAnim");
const itchioPlayer = document.getElementById("itchioAnim");
const discordLink = document.getElementById("discordLink");
const youtubeLink = document.getElementById("youtubeLink");
const itchioLink = document.getElementById("itchioLink");
const animations = {};

loadAllAnimations();


// Discord

if (discordLink && youtubeLink && itchioLink) {
    discordLink.addEventListener("mouseenter", () => {
        discordPlayer.load(animations.discordIn);

        discordPlayer.addEventListener("ready", () => {
            discordPlayer.stop();
            discordPlayer.play();
        }, { once: true });
    });

    discordLink.addEventListener("mouseleave", () => {
        discordPlayer.load(animations.discordOut);

        discordPlayer.addEventListener("ready", () => {
            discordPlayer.stop();
            discordPlayer.play();
        }, { once: true });
    });


    // YouTube
    youtubeLink.addEventListener("mouseenter", () => {
        youtubePlayer.load(animations.youtubeIn);

        youtubePlayer.addEventListener("ready", () => {
            youtubePlayer.stop();
            youtubePlayer.play();
        }, { once: true });
    });

    youtubeLink.addEventListener("mouseleave", () => {
        youtubePlayer.load(animations.youtubeOut);

        youtubePlayer.addEventListener("ready", () => {
            youtubePlayer.stop();
            youtubePlayer.play();
        }, { once: true });
    });


    // Itchio
    itchioLink.addEventListener("mouseenter", () => {
        itchioPlayer.load(animations.itchioIn);

        itchioPlayer.addEventListener("ready", () => {
            itchioPlayer.stop();
            itchioPlayer.play();
        }, { once: true });
    });

    itchioLink.addEventListener("mouseleave", () => {
        itchioPlayer.load(animations.itchioOut);

        itchioPlayer.addEventListener("ready", () => {
            itchioPlayer.stop();
            itchioPlayer.play();
        }, { once: true });
    });
}

loadBananusAnimationEveryMinute();

// functions

async function loadBananusAnimationEveryMinute() {
    setInterval(() => {
        console.log("Loading new bananus animation");
        bananusPlayer.load(getRandomBananusAnimation());
        bananusPlayer.addEventListener("ready", () => {
            bananusPlayer.stop();
            bananusPlayer.play();
        }, { once: true });
    }, 60 * 200);
}

function getRandomBananusAnimation() {
    const keys = Object.keys(animations).filter(k => k.startsWith("bananus"));

    if (keys.length === 0) {
        console.warn("No bananus animations loaded yet");
        return null;
    }

    const key = keys[Math.floor(Math.random() * keys.length)];
    return animations[key];
}

async function loadAllAnimations() {
    await Promise.all([
        fetch(`${LOTTIE_PATH}bananus/bananus_drink.json`).then(r => r.json()).then(j => animations.bananusDrink = j),
        fetch(`${LOTTIE_PATH}bananus/bananus_peace.json`).then(r => r.json()).then(j => animations.bananusPeace = j),
        fetch(`${LOTTIE_PATH}bananus/bananus_sunglasses.json`).then(r => r.json()).then(j => animations.bananusSunglasses = j),
        fetch(`${LOTTIE_PATH}bananus/bananus_thumbsup.json`).then(r => r.json()).then(j => animations.bananusThumbsup = j),
        fetch(`${LOTTIE_PATH}bananus/bananus_balance.json`).then(r => r.json()).then(j => animations.bananusBalance = j),

        fetch(`${LOTTIE_PATH}links/discord-in.json`).then(r => r.json()).then(j => animations.discordIn = j),
        fetch(`${LOTTIE_PATH}links/discord-out.json`).then(r => r.json()).then(j => animations.discordOut = j),

        fetch(`${LOTTIE_PATH}links/youtube-in.json`).then(r => r.json()).then(j => animations.youtubeIn = j),
        fetch(`${LOTTIE_PATH}links/youtube-out.json`).then(r => r.json()).then(j => animations.youtubeOut = j),

        fetch(`${LOTTIE_PATH}links/itchio-in.json`).then(r => r.json()).then(j => animations.itchioIn = j),
        fetch(`${LOTTIE_PATH}links/itchio-out.json`).then(r => r.json()).then(j => animations.itchioOut = j),

    ]);
}