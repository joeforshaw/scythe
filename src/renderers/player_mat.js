import scythe from 'scythe';
import Renderer from 'renderers/renderer';
import * as Factions from 'enums/factions';
import config from 'config/scythe';
import playerMatConfig from 'config/player_mats';
import colors from 'config/colors';

export default class PlayerMatRenderer extends Renderer {

  constructor(model, state) {
    super(model, state);
    this.initializeBackground();
  }

  initializeBackground() {
    const width = playerMatConfig.width * config.width;
    const height = playerMatConfig.height * config.height;
    const x = config.width - width;
    const y = 0;
    this.background = scythe.game.add.graphics(x, y);
    this.background.beginFill(colors.playerMat);
    this.background.lineStyle(0, colors.playerMat, 0);
    this.background.drawRect(0, 0, width, height);
    this.background.endFill();
    scythe.game.world.bringToTop(this.background);
  }

  update(model) {
    
  }

}
