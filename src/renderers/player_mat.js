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
    this.numberOfActionGroups = 4;
    this.playerMatNameOffset = 30;
    this.playerMatWidth = playerMatConfig.width * config.width;
    this.playerMatHeight = playerMatConfig.height * config.height;
    this.paddingAmount = Math.round(this.playerMatWidth * playerMatConfig.padding);
    this.actionGroupWidth = (this.playerMatWidth - ((this.numberOfActionGroups + 1) * this.paddingAmount)) / this.numberOfActionGroups;
    this.actionWidth = this.actionGroupWidth - (2 * this.paddingAmount);

    this.group = scythe.game.add.group();
    this.group.x = window.outerWidth - this.playerMatWidth;
    this.group.y = 0;
    this.initializeBackground();
    this.initializeTitle(state.playerMat);
    this.initializeActionGroups(state);
  }

  initializeBackground() {
    this.background = scythe.game.add.graphics(this.x, this.y);
    this.background.beginFill(colors.playerMat.background);
    this.background.lineStyle(0, colors.playerMat.background, 0);
    this.background.drawRect(0, 0, this.playerMatWidth, this.playerMatHeight);
    this.background.endFill();
    this.group.add(this.background);
  }

  initializeTitle(playerMat) {
    this.title = scythe.game.add.group();
    this.title.x = this.paddingAmount;
    this.title.y = 12;
    const copy = Copy.forPlayerMat(playerMat);
    const titleText = scythe.game.add.text(0, 0, copy, {
      font:       config.fonts.serif,
      fontSize:   14,
      textAlign:  'center',
      fontWeight: 'normal',
      fill:       colors.playerMat.title
    });
    this.title.add(titleText);
    this.group.add(this.title);
  }

  initializeActionGroups(playerMat) {
    this.actionGroups = [];
    this.actions = [];
    this.actionText = [];
    const height = this.playerMatHeight - (2 * this.paddingAmount) - this.playerMatNameOffset;
    for (let i = 0; i < this.numberOfActionGroups; i++) {
      this.actionGroups[i] = scythe.game.add.group();
      this.actionGroups[i].x = this.paddingAmount + (this.paddingAmount + this.actionGroupWidth) * i;
      this.actionGroups[i].y = this.paddingAmount + this.playerMatNameOffset;
      this.actionGroups[i].width = this.actionGroupWidth;
      const graphics = scythe.game.add.graphics(this.x + this.paddingAmount, this.y + this.paddingAmount)
      graphics.beginFill(colors.playerMat.actionGroup);
      graphics.lineStyle(0, colors.playerMat.actionGroup, 0);
      graphics.drawRect(0, 0, this.actionGroupWidth, height);
      graphics.endFill();
      this.actionGroups[i].add(graphics);
      this.group.add(this.actionGroups[i]);
      this.initializeActionsForGroup(playerMat, i);
    }
  }

  initializeActionsForGroup(playerMat, i) {
    this.actions[i] = [];
    const actionDataForGroup = playerMat.actions.filter(function(mat) { return mat.group == i; })
    if (actionDataForGroup.length > 0) { this.initializeAction(i, actionDataForGroup[0], true); }
    if (actionDataForGroup.length > 1) { this.initializeAction(i, actionDataForGroup[1], false); }
  }

  initializeAction(i, actionData, topRow) {
    const height = (this.actionGroups[i].height - (2 * this.paddingAmount)) / 3;
    const actionsIndex = topRow ? 0 : 1;
    this.actions[i][actionsIndex] = scythe.game.add.group();
    this.actions[i][actionsIndex].width = this.actionWidth;
    if (!topRow) {
      this.actions[i][actionsIndex].y = Math.round(this.actionGroups[i].height - (2 * this.paddingAmount) - height);
    }
    const graphics = scythe.game.add.graphics(this.paddingAmount, this.paddingAmount);
    graphics.beginFill(colors.playerMat.action);
    graphics.lineStyle(0, colors.playerMat.action, 0);
    graphics.drawRect(0, 0, this.actionWidth, height);
    graphics.endFill();
    this.actions[i][actionsIndex].add(graphics);
    this.actionGroups[i].add(this.actions[i][actionsIndex]);
    this.initializeActionText(i, actionData.action, topRow);
  }

  initializeActionText(i, action, topRow) {
    this.actionText[i] = [];
    const actionsIndex = topRow ? 0 : 1;
    this.actionText[i][actionsIndex] = scythe.game.add.group();
    const x = this.actionGroupWidth / 2;
    const copy = Copy.forAction(action).toUpperCase();
    const text = scythe.game.add.text(x, this.paddingAmount + 5, copy, {
      font:       config.fonts.sansSerif,
      fontSize:   18,
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
