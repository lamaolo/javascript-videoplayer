class Intersection {
  constructor() {
    this.threshold = 0.4;
    this.observer;
    this.player;

    this.handleIntersection = this.handleIntersection.bind(this);
  }

  run(player) {
    this.player = player;

    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold, // si el elemento sale un 40% o entra un 40% en pantalla
    });
  }

  handleIntersection(entries) {
    const entry = entries[0];

    // Llamo a togglePlay para que se actualice el boton de play/pause en el navegador
    this.player.togglePlay();

    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  startObserve() {
    this.observer.observe(this.player.media);
  }

  stopObserve() {
    this.observer.unobserve(this.player.media);
  }
}

export default Intersection;
