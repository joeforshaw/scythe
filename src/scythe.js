import PubSub from 'pubsub-js';

import Sprites from 'services/sprites';
import config from 'config/scythe';
import * as Topics from 'enums/topics';
import Initializer from 'initializer';

class Scythe {

  constructor() {
    this.game = new Phaser.Game({
      width: "100%", // config.width,
      height: "100%", // config.height,
      renderer: config.renderMode,
      parent: config.containerID,
      resolution: 2,
      state: {
        preload: this.preload,
        create: this.create,
        update: this.update
      }
    });
  }

  preload() {
    scythe.sprites = new Sprites(scythe.game);
    PubSub.publish(Topics.GAME_PRELOAD);
  }

  create() {
    new Initializer().run();
    PubSub.publish(Topics.GAME_CREATE);
    this.game.input.mouse.capture = true;
  }

  update() {
    
  }

}

const scythe = new Scythe();
export default scythe;
