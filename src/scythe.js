import { store } from 'store/store';
import { createPhaser, updateTick } from 'store/actions';
import Sprites from 'services/sprites';
import Board from 'models/board';
import BoardRenderer from 'renderers/board';
import config from 'config/scythe';
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
    store.dispatch(createPhaser(this.game));
  }

  preload() {
    scythe.sprites = new Sprites(scythe.game);
    PubSub.publish(Topics.GAME_PRELOAD);
  }

  create() {
    scythe.initialSetup();
    PubSub.publish(Topics.GAME_CREATE);
  }

  update() {
    // store.dispatch(updateTick(Date.now()));
  }

  initialSetup() {
    new Board({
      x: 0,
      y: 0,
      width: config.width,
      height: config.height
    });
  }

}

const scythe = new Scythe();

export default scythe;
