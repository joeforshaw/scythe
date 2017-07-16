import Sprites from 'services/sprites';
import Board from 'models/board';
import BoardRenderer from 'renderers/board';
import config from 'config/scythe';
import PubSub from 'pubsub-js';
import * as Topics from 'enums/topics';

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
  }

  preload() {
    scythe.sprites = new Sprites(scythe.game);
    PubSub.publish(Topics.PRELOAD);
  }

  create() {
    this.board = new Board({
      x: 0,
      y: 0,
      width: config.width,
      height: config.height
    });
    PubSub.publish(Topics.CREATE);
  }

  update() {
    PubSub.publish(Topics.UPDATE);
  }

}

const scythe = new Scythe();

export default scythe;
