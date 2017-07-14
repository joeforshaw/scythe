import Sprites from 'services/sprites';
import Board from 'models/board';
import BoardRenderer from 'renderers/board';
import config from 'config/scythe';

class Scythe {

  constructor() {
    this.game = new Phaser.Game(
      config.width,
      config.height,
      config.renderMode,
      config.containerID,
      {
        preload: this.preload,
        create: this.create,
        update: this.update
      }
    );
    this.board = new Board(BoardRenderer);
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

const scythe = new Scythe();

export default scythe;
