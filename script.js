document.addEventListener("DOMContentLoaded", function () {

    /* =================================
       RECORD PLAYER
    ================================= */

    const vinyl = document.getElementById("vinyl");
    const playButton = document.getElementById("playButton");

    if (vinyl && playButton) {

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

    }


/* =================================
   ENTER → STORY
================================= */

const enterButton = document.getElementById("enterButton");

if (enterButton) {

    enterButton.addEventListener("click", function () {

        const story = document.querySelector(".story");

        if (story) {

            story.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}
    /* =================================
       START THE STORY
    ================================= */

    const startStory = document.getElementById("startStory");

    if (startStory) {

        startStory.addEventListener("click", function () {

            const firstChapter = document.querySelector(".chapter");

            if (firstChapter) {

                firstChapter.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    /* =================================
       NEXT MEMORY BUTTONS
    ================================= */

    const nextButtons = document.querySelectorAll(".next-memory");

    nextButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const currentChapter = button.closest(".chapter");

            if (!currentChapter) return;

            const nextChapter = currentChapter.nextElementSibling;

            if (nextChapter) {

                nextChapter.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });
  
});    
