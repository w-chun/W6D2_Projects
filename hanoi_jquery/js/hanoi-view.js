class View {
  constructor (game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
    this.render();
  }

  setupTowers() {
    let $tower, $disk;

    for (let i = 0; i < 3; i++) {
        $tower = $("<ul>");
      for (let j = 0; j < 3; j++) {
        $disk = $("<li>");
        $tower.append($disk);
      }
      this.$el.append($tower);
    }
  }

  render () {
    let towers = this.game.towers;

    for (var i = 0; i < towers.length; i++) {
      let tower = towers[i];
      for (var j = 0; j < tower.length; j++) {
        
      }
    }
  }
}

module.exports = View;
