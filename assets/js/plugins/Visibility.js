class Visibility {
  constructor() {
    this.player;

    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;
  }

  startObserve() {
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  stopObserve() {
    console.log("Stop observe");
    document.removeEventListener(
      "visibilitychange",
      this.handleVisibilityChange
    );
  }

  handleVisibilityChange() {
    const isVisible = document.visibilityState;

    if (isVisible === "visible") {
      this.player.play();
    } else if (isVisible === "hidden") {
      this.player.pause();
    }
  }
}

export default Visibility;
