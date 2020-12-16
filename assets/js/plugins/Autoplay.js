class Autoplay {
  constructor() {
    this.player;
  }

  run(player) {
    this.player = player;
    this.toggleAutoplay();
  }

  setAutoplay() {}

  toggleAutoplay() {
    const isAutoplay = localStorage.getItem("autoplay");
    if (isAutoplay === "true") {
      this.activateAutoplay();
    } else {
      this.desactivateAutoplay();
    }
  }

  activateAutoplay() {
    if (!this.player.media.muted) {
      this.player.mute();
      this.player.play();
    }
  }

  desactivateAutoplay() {}
}

export default Autoplay;
