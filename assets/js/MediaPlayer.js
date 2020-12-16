function MediaPlayer(config) {
  this.media = config.element;
  this.plugins = config.plugins;
  this.playPauseIcon = document.getElementById("playpause-icon");
  this.soundIcon = document.getElementById("sound-icon");
  this.initPlugins(this.plugins);
}

MediaPlayer.prototype.initPlugins = function (plugins) {
  for (const plugin in this.plugins) {
    // Le paso la instancia de MediaPlayer a cada plugin. Todos los plugins tienen el metodo run
    this.plugins[plugin].run(this);
  }
  // plugins.forEach((plugin) => plugin.init.run(this));
};

// Plugin Intersection
MediaPlayer.prototype.toggleIntersection = function (value) {
  const { Intersection } = this.plugins;

  // Value es el valor del checkbox (true si está clickeado y false si está desactivado)
  if (value) {
    Intersection.startObserve();
  } else {
    Intersection.stopObserve();
  }
};

MediaPlayer.prototype.toggleVisibility = function (value) {
  const { Visibility } = this.plugins;

  // Value es el valor del checkbox (true si está clickeado y false si está desactivado)
  if (value) {
    Visibility.startObserve();
  } else {
    Visibility.stopObserve();
  }
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

MediaPlayer.prototype.toggleMute = function () {
  const isMuted = this.media.muted;

  if (isMuted) {
    this.unmute();
  } else {
    this.mute();
  }
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
  this.soundIcon.classList.replace("fa-volume-up", "fa-volume-mute");
};

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
  this.soundIcon.classList.replace("fa-volume-mute", "fa-volume-up");
};

MediaPlayer.prototype.play = function () {
  this.playPauseIcon.classList.replace("fa-play", "fa-pause");
  this.media.play();

  const minutes = Math.floor(this.media.duration / 60);
  const seconds = Math.floor(this.media.duration - minutes * 60);
};

MediaPlayer.prototype.pause = function () {
  this.playPauseIcon.classList.replace("fa-pause", "fa-play");
  this.media.pause();
};

MediaPlayer.prototype.restart = function () {
  this.media.currentTime = 0;
};

MediaPlayer.prototype.back = function () {
  this.media.currentTime -= 5;
};

MediaPlayer.prototype.advance = function () {
  this.media.currentTime += 5;
};

export default MediaPlayer;
