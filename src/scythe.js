import Sprites from 'services/sprites';
import Board from 'models/board';

class Scythe {

  constructor() {
    this.game = new Phaser.Game(1024, 768, Phaser.AUTO, '', {
      preload: this.preload,
      create: this.create,
      update: this.update
    });
    this.board = new Board();
  }

  preload() {
    scythe.sprites = new Sprites(scythe.game);
  }

  create() {
    scythe.board.render();
  }

  update() {

  }

}

var scythe = new Scythe();

export default scythe;
