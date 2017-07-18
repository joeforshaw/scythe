import { createStore } from 'redux';
import PubSub from 'pubsub-js';

import Sprites from 'services/sprites';
import config from 'config/scythe';
import * as Topics from 'enums/topics';
import reducer from 'store/reducer';
import Initializer from 'initializer';

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
    this.store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  preload() {
    scythe.sprites = new Sprites(scythe.game);
    PubSub.publish(Topics.GAME_PRELOAD);
  }

  create() {
    new Initializer().run();
    PubSub.publish(Topics.GAME_CREATE);
  }

  update() {
    
  }

}

const scythe = new Scythe();
export default scythe;
export { store };
