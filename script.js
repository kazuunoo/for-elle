/* ================================= */
/*          RECORD PLAYER             */
/* ================================= */

const vinyl = document.getElementById("vinyl");
const playButton = document.getElementById("playButton");

let playing = false;


playButton.addEventListener("click", function () {

    playing = !playing;

    vinyl.classList.toggle("playing", playing);

    if (playing) {

        playButton.textContent = "Ⅱ";

        // Open Sparks in Spotify
        window.open(
            "https://open.spotify.com/track/7D0RhFcb3CrfPuTJ0obrod",
            "_blank"
        );

    } else {

        playButton.textContent = "▶";

    }

});


/* ================================= */
/*              ENTER                */
/* ================================= */

const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", function () {

    document.querySelector(".placeholder").scrollIntoView({
        behavior: "smooth"
    });

/* ================================= */
/*          RECORD PLAYER             */
/* ================================= */

const vinyl = document.getElementById("vinyl");
const playButton = document.getElementById("playButton");

let playing = false;


playButton.addEventListener("click", function () {

    playing = !playing;

    vinyl.classList.toggle("playing", playing);

    if (playing) {

        playButton.textContent = "Ⅱ";

        window.open(
            "https://open.spotify.com/track/7D0RhFcb3CrfPuTJ0obrod",
            "_blank"
        );

    } else {

        playButton.textContent = "▶";

    }

});


/* ================================= */
/*          STORY REVEAL              */
/* ================================= */

const chapters = document.querySelectorAll(".chapter");


const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.2
    }

);


chapters.forEach(function(chapter) {

    observer.observe(chapter);

});


/* ================================= */
/*        START STORY BUTTON          */
/* ================================= */

const startStory = document.getElementById("startStory");

if (startStory) {

    startStory.addEventListener("click", function() {

        document.querySelector(".chapter").scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* ================================= */
/*         NEXT MEMORY BUTTONS        */
/* ================================= */

const nextButtons = document.querySelectorAll(".next-memory");

nextButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const currentChapter = button.closest(".chapter");

        const nextChapter = currentChapter.nextElementSibling;

        if (nextChapter) {

            nextChapter.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ================================= */
/*        REASONS BUTTON              */
/* ================================= */

const reasonsButton = document.getElementById("reasonsButton");

if (reasonsButton) {

    reasonsButton.addEventListener("click", function() {

        alert("the 100 reasons are coming next ♡");

    });

}
    


