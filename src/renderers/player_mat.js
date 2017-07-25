import scythe from 'scythe';
import Renderer from 'renderers/renderer';
import * as Factions from 'enums/factions';
import config from 'config/scythe';
import playerConfig from 'config/player_mats';
import colors from 'config/colors';

export default class PlayerMatRenderer extends Renderer {

  constructor(model, state) {
    super(model, state);
    this.initializeBackground();
  }

  initializeBackground() {
    const width = playerConfig.width * config.width;
    const height = playerConfig.height * config.height;
    const x = config.width - width;
    const y = 0;
    console.log(x, y, width, height);
    this.background = scythe.game.add.graphics(x, y);
    this.background.beginFill(colors.playerMat);
    this.background.lineStyle(2, 0x0000FF, 1);
    this.background.drawRect(x, y, width, height);
  }

  update(model) {
    
  }

}
