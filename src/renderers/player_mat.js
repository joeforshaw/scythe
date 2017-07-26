import scythe from 'scythe';
import Renderer from 'renderers/renderer';
import * as Factions from 'enums/factions';
import * as Actions from 'enums/actions';
import config from 'config/scythe';
import playerMatConfig from 'config/player_mats';
import colors from 'config/colors';
import Copy from 'utils/copy';

export default class PlayerMatRenderer extends Renderer {

  constructor(model, state) {
    super(model, state);
    this.width = playerMatConfig.width * config.width;
    this.height = playerMatConfig.height * config.height;
    this.paddingAmount = this.width * playerMatConfig.padding;
    this.initializeBackground();
    this.initializeActionGroups();
  }

  initializeBackground() {
    this.x = window.outerWidth - this.width;
    this.y = 0;
    this.background = scythe.game.add.graphics(this.x, this.y);
    this.background.beginFill(colors.playerMat.background);
    this.background.lineStyle(0, colors.playerMat.background, 0);
    this.background.drawRect(0, 0, this.width, this.height);
    this.background.endFill();
  }

  initializeActionGroups() {
    this.actionGroups = [];
    this.actions = [];
    this.actionText = [];
    const numberOfActionGroups = 4;
    const width = (this.width - ((numberOfActionGroups + 1) * this.paddingAmount)) / numberOfActionGroups;
    const height = this.height - (2 * this.paddingAmount);
    for (let i = 0; i < numberOfActionGroups; i++) {
      const x = (this.paddingAmount + width) * i;
      const y = this.paddingAmount;
      this.actionGroups[i] = scythe.game.add.graphics(this.x + this.paddingAmount, this.y + this.paddingAmount);
      this.actionGroups[i].beginFill(colors.playerMat.actionGroup);
      this.actionGroups[i].lineStyle(0, colors.playerMat.actionGroup, 0);
      this.actionGroups[i].drawRect(x, 0, width, height);
      this.actionGroups[i].endFill();
      this.initializeGroupActions(i);
    }
  }

  initializeGroupActions(i) {
    const width = this.actionGroups[i].width - (2 * this.paddingAmount);
    const height = (this.actionGroups[i].height - (2 * this.paddingAmount)) / 3;
    const x = (this.paddingAmount + this.actionGroups[i].width) * i;
    const bottomY = this.actionGroups[i].height - (2 *this.paddingAmount) - height;

    this.actions[i] = [];
    this.actions[i][0] = scythe.game.add.graphics(this.actionGroups[i].x + this.paddingAmount, this.actionGroups[i].y + this.paddingAmount);
    this.actions[i][0].beginFill(colors.playerMat.action);
    this.actions[i][0].lineStyle(0, colors.playerMat.action, 0);
    this.actions[i][0].drawRect(x, 0, width, height);
    this.actions[i][0].endFill();
    this.initializeActionText(i, true, Actions.MOVE);

    this.actions[i] = [];
    this.actions[i][1] = scythe.game.add.graphics(this.actionGroups[i].x + this.paddingAmount, this.actionGroups[i].y + this.paddingAmount);
    this.actions[i][1].beginFill(colors.playerMat.action);
    this.actions[i][1].lineStyle(0, colors.playerMat.action, 0);
    this.actions[i][1].drawRect(x, bottomY, width, height);
    this.actions[i][1].endFill();
    this.initializeActionText(i, false, Actions.MOVE);
  }

  initializeActionText(i, topRow, action) {
    const actionsIndex = topRow ? 0 : 1;
    const x = i * (this.actions[i][actionsIndex].x + (this.actions[i][actionsIndex].width / 2))
    const y = this.actions[i][actionsIndex].y;
    this.actionText[i] = scythe.game.add.text(x, y, Copy.forAction(action), {
      font:            'Arial',
      fontSize:        16,
      textAlign:       'center',
      fontWeight:      '100',
      fill:            colors.playerMat.actionText
    });
    this.actionText[i].anchor.setTo(0.5, 0);
  }

  update(model) {
  }

}
