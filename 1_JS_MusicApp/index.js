window.addEventListener('load', () => {
    // Go to index.html file and add "class="sound" after every audio src. 
    // before: <audio src="./sounds/clay.mp3"></audio>
    // after: <audio class="sound" src="./sounds/clay.mp3"></audio>

    const sounds = document.querySelectorAll('.sound');
    
    //This is selecting all the pads div, not the parent(section).

    const pads = document.querySelectorAll(".pads div");

    // if you want to check sound code unhide below: 
    // console.log(sounds[0]);

    const visual = document.querySelector('.visual');
    const color = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
      ];

    

    //Sounds here: 
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            //allows to click multiple times
            sounds[index].currentTime = 0;
            sounds[index].play();
            
            createBubbles(index);
        });
    });


    // Create a function that makes bubbles
    const createBubbles = index => {
        //Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
          visual.removeChild(this);
        });
      };
    });

