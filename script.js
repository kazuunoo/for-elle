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

});
