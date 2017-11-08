const View = require('./ttt-view.js'); // require appropriate file
const Game = require('./ttt_node/game.js');// require appropriate file

$( () => {
  // Your code here
  let root = $('.ttt');
  let game = new Game();
  //let $h1 = $('h1');
  let view = new View(game, root);
});
