import scythe from 'scythe';
import Model from 'models/model';
import UnitRenderer from 'renderers/unit';
import PubSub from 'pubsub-js';
import { SELECTED_UNIT } from 'enums/topics';
import * as Territories from 'enums/territories';

export default class Unit extends Model {

  constructor(params) {
    super(params);
    const self = this;
    this.initialiseMoveRules();
  }

  numberOfMoves() {
    return 1; // TODO
  }

  initialiseMoveRules() {
    this.moveRules = [];

    // Can't enter bases
    this.addMoveRule(function(params) {
      return params.territoryState.type != Territories.BASE;
    });
  }

  addMoveRule(rule) {
    this.moveRules.push(rule);
  }

  canMoveTo(params) {
    const state = this.getState();
    params.unitState = state;
    for (let i = 0; i < this.moveRules.length; i++) {
      if (!this.moveRules[i](params)) { return false; }
    }
    return true;
  }

  onClicked(sprite) {
    PubSub.publish(SELECTED_UNIT, {
      unit: this,
      alreadySelected: this.getState().selected
    });
  }

}
