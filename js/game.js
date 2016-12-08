
var game = new Phaser.Game(400, 600, 'gamediv');



game.state.add('boot', bootState); 
game.state.add('menu',menuState);
game.state.add('load', loadState);
game.state.add('input',inputState);
game.state.add('about',aboutState);
game.state.add('top10',top10State);
game.state.add('play', playState); 


game.state.start('boot');
