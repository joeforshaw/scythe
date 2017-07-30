import PubSub from 'pubsub-js';

import Sprites from 'services/sprites';
import config from 'config/scythe';
import { GAME_PRELOAD, GAME_CREATE } from 'enums/topics';
import Bus from 'activities/bus';
import PlayersInitializer from 'initializers/players';
import TerritoriesInitializer from 'initializers/territories';
import UnitsInitializer from 'initializers/units';

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
    PubSub.publish(GAME_PRELOAD);
  }

  create() {
    const bus = new Bus({
      players:     new PlayersInitializer(),
      territories: new TerritoriesInitializer(),
      units:       new UnitsInitializer()
    });
    PubSub.publish(GAME_CREATE);
    this.game.input.mouse.capture = true;
  }

  update() { }

}

const scythe = new Scythe();
export default scythe;
