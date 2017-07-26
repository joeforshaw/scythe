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
    this.playerMatWidth = playerMatConfig.width * config.width;
    this.playerMatHeight = playerMatConfig.height * config.height;
    this.paddingAmount = this.playerMatWidth * playerMatConfig.padding;
    this.group = scythe.game.add.group();
    this.group.x = window.outerWidth - this.playerMatWidth;
    this.group.y = 0;
    this.initializeBackground();
    this.initializeActionGroups();
  }

  initializeBackground() {
    this.background = scythe.game.add.graphics(this.x, this.y);
    this.background.beginFill(colors.playerMat.background);
    this.background.lineStyle(0, colors.playerMat.background, 0);
    this.background.drawRect(0, 0, this.playerMatWidth, this.playerMatHeight);
    this.background.endFill();
    this.group.add(this.background);
  }

  initializeActionGroups() {
    this.actionGroups = [];
    this.actions = [];
    this.actionText = [];
    const numberOfActionGroups = 4;
    const width = (this.playerMatWidth - ((numberOfActionGroups + 1) * this.paddingAmount)) / numberOfActionGroups;
    const height = this.playerMatHeight - (2 * this.paddingAmount);
    for (let i = 0; i < numberOfActionGroups; i++) {
      this.actionGroups[i] = scythe.game.add.group();
      this.actionGroups[i].x = this.paddingAmount + (this.paddingAmount + width) * i;
      this.actionGroups[i].y = this.paddingAmount;
      const graphics = scythe.game.add.graphics(this.x + this.paddingAmount, this.y + this.paddingAmount)
      graphics.beginFill(colors.playerMat.actionGroup);
      graphics.lineStyle(0, colors.playerMat.actionGroup, 0);
      graphics.drawRect(0, 0, width, height);
      graphics.endFill();
      this.actionGroups[i].add(graphics);
      this.group.add(this.actionGroups[i]);
      this.initializeActionsForGroup(i);
    }
  }

  initializeActionsForGroup(i) {
    const width = this.actionGroups[i].width - (2 * this.paddingAmount);
    const height = (this.actionGroups[i].height - (2 * this.paddingAmount)) / 3;

    this.actions[i] = [];
    this.actions[i][0] = scythe.game.add.group();
    const topActionGraphics = scythe.game.add.graphics(this.paddingAmount, this.paddingAmount);
    topActionGraphics.beginFill(colors.playerMat.action);
    topActionGraphics.lineStyle(0, colors.playerMat.action, 0);
    topActionGraphics.drawRect(0, 0, width, height);
    topActionGraphics.endFill();
    this.actions[i][0].add(topActionGraphics);
    this.actionGroups[i].add(this.actions[i][0]);
    this.initializeActionText(i, Actions.MOVE, true);

    this.actions[i][1] = scythe.game.add.group();
    this.actions[i][1].y = this.actionGroups[i].height - (2 * this.paddingAmount) - height;
    const bottomActionGraphics = scythe.game.add.graphics(this.paddingAmount, this.paddingAmount);
    bottomActionGraphics.beginFill(colors.playerMat.action);
    bottomActionGraphics.lineStyle(0, colors.playerMat.action, 0);
    bottomActionGraphics.drawRect(0, 0, width, height);
    bottomActionGraphics.endFill();
    this.actions[i][1].add(bottomActionGraphics);
    this.actionGroups[i].add(this.actions[i][1]);
    this.initializeActionText(i, Actions.MOVE, false);
  }

  initializeActionText(i, action, topRow) {
    this.actionText[i] = [];
    const actionsIndex = topRow ? 0 : 1;
    this.actionText[i][actionsIndex] = scythe.game.add.group();
    const x = this.actionGroups[i].width / 2;
    const copy = Copy.forAction(action);
    const text = scythe.game.add.text(x, this.paddingAmount + 5, copy, {
      font:       'League Gothic',
      fontSize:   14,
      textAlign:  'center',
      fontWeight: 'normal',
      fill:       colors.playerMat.actionText
    });
    text.anchor.setTo(0.5, 0);
    this.actionText[i][actionsIndex].add(text);
    this.actions[i][actionsIndex].add(this.actionText[i][actionsIndex]);
  }

  update(model) {
  }

}
