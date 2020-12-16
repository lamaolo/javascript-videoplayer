import MediaPlayer from "./MediaPlayer.js";
import Intersection from "./plugins/Intersection.js";
import Visibility from "./plugins/Visibility.js";
import Autoplay from "./plugins/Autoplay.js";

const video = document.getElementById("video");

const player = new MediaPlayer({
  element: video,
  plugins: {
    Intersection: new Intersection(),
    Visibility: new Visibility(),
    Autoplay: new Autoplay(),
  },
});

// Video player buttons
const playPauseIcon = document.getElementById("playpause-button");
playPauseIcon.addEventListener("click", () => {
  player.togglePlay();
});

const soundIcon = document.getElementById("sound-button");
soundIcon.addEventListener("click", () => {
  player.toggleMute();
});

const restartIcon = document.getElementById("restart-button");
restartIcon.addEventListener("click", () => {
  player.restart();
});

const advanceButton = document.getElementById("advance-button");
advanceButton.addEventListener("click", () => {
  player.advance();
});

const backButton = document.getElementById("back-button");
backButton.addEventListener("click", () => {
  player.back();
});

// AutoStop features
const intersectionCheckbox = document.getElementById("intersection-autostop");
intersectionCheckbox.addEventListener("click", (e) => {
  // Le paso el valor que tiene el checkbox (true o false)
  player.toggleIntersection(intersectionCheckbox.checked);
});

const visibilityCheckbox = document.getElementById("visibility-autostop");
visibilityCheckbox.addEventListener("click", (e) => {
  // Le paso el valor que tiene el checkbox (true o false)
  player.toggleVisibility(visibilityCheckbox.checked);
});

const autoplayCheckbox = document.getElementById("autoplay");

localStorage.getItem("autoplay") === "true"
  ? (autoplayCheckbox.checked = true)
  : (autoplayCheckbox.checked = false);

autoplayCheckbox.addEventListener("click", () => {
  localStorage.setItem("autoplay", autoplayCheckbox.checked);
});
