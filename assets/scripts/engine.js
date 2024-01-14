const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysChecked = document.querySelector(".keys-check input")

let audio = new Audio("assets/sounds/a.wav");
let mapedKeys = [];

const playTune = (key) => {
    audio.src = `assets/sounds/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);

    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
    
});

const handleVolume = (e) => {
    audio.volume =e.target.value;
};

volumeSlider.addEventListener("input", handleVolume);

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}; 

keysChecked.addEventListener("input", showHideKeys);