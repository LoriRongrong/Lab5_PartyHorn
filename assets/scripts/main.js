// main.js

// volume 
let vol = document.getElementById("volume-number");
let slider = document.getElementById("volume-slider");
let audio = document.getElementById("horn-sound");
let loudImg = document.getElementById("volume-image");
let btn = document.getElementById("honk-btn");
let soundImg = document.getElementById("sound-image");
let party_radio = document.getElementById("radio-party-horn");
let car_radio = document.getElementById("radio-car-horn");
let air_radio = document.getElementById("radio-air-horn");

vol.addEventListener("change", () => {
    audio.volume = (vol.value / 100);
    slider.value = vol.value;
    if (vol.value > 67) {
        loudImg.src = "./assets/media/icons/volume-level-3.svg";
    } else if (vol.value >= 34) {
        loudImg.src = "./assets/media/icons/volume-level-2.svg";
    } else if (vol.value >= 1) {
        loudImg.src = "./assets/media/icons/volume-level-1.svg";
    } else {
        loudImg.src = "./assets/media/icons/volume-level-0.svg";
        // disable the button
        btn.disabled = true;
    }
    
});

slider.addEventListener("change", () => {
    audio.volume = (slider.value/100);
    vol.value = slider.value;
    if (slider.value >= 67) {
        loudImg.src = "./assets/media/icons/volume-level-3.svg";
    } else if (slider.value >= 34) {
        loudImg.src = "./assets/media/icons/volume-level-2.svg";
    } else if (slider.value >= 1) {
        loudImg.src = "./assets/media/icons/volume-level-1.svg";
    } else {
        loudImg.src = "./assets/media/icons/volume-level-0.svg";
        // disable the button
        btn.disabled = true;
    }
});


// radio selection 



party_radio.addEventListener("change", () => {
    audio.src = "./assets/media/audio/party-horn.mp3";
    soundImg.src = "./assets/media/images/party-horn.svg";
});


car_radio.addEventListener("change", () => {
    audio.src = "./assets/media/audio/car-horn.mp3";
    soundImg.src = "./assets/media/images/car.svg";
});


air_radio.addEventListener("change", () => {
    audio.src = "./assets/media/audio/air-horn.mp3";
    soundImg.src = "./assets/media/images/air-horn.svg";
});


// button
btn.addEventListener("click", (event) => {
    console.log('why');
    event.preventDefault();
    audio.play();
});



