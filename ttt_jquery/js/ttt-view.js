class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on( "click", "li", event => {
      let target = event.currentTarget;
      this.makeMove($(target));
    });
  }

  makeMove($square) {
    let player= this.game.currentPlayer;
    let pos = $square.data("pos");
    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("Invalid Move");
      return;
    }
    $square.addClass(player);

    if (this.game.isOver()) {
      let winner = this.game.winner();
      if (winner != null) {
        alert(`${winner} wins!`);
      }
      else {
        alert("Tied");
      }
      // setTimeout(function(){
      //   location.reload();
      // }, 1000);
    }
  }

  setupBoard() {
    let $ul = $('<ul>');

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $("<li>");
        $li.data("pos", [rowIdx, colIdx]);

        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
