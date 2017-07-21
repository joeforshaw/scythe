import scythe from 'scythe';
import Model from 'models/model';
import UnitRenderer from 'renderers/unit';
import PubSub from 'pubsub-js';
import { SELECTED_UNIT } from 'enums/topics';
import { setSelectedUnit } from 'store/actions';
import * as Territories from 'enums/territories';

export default class Unit extends Model {

  constructor(params) {
    super(params);
    const self = this;
    this.initialiseMoveRules();
    PubSub.subscribe(SELECTED_UNIT, function(msg, data) { self.onUnitSelected(data); });
  }

  numberOfMoves() {
    return 1; // TODO
  }

  initialiseMoveRules() {
    this.moveRules = [];

    // Can't enter enemy bases
    this.addMoveRule(function(params) {
      return params.territoryState.type != Territories.BASE
        || params.territoryState.faction == params.unitState.faction
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
    const moves = this.numberOfMoves();
    const alreadySelected = this.getState().selected;
    if (alreadySelected) {
      PubSub.publish(SELECTED_UNIT, { unit: null, reachable: {} });
    } else {
      PubSub.publish(SELECTED_UNIT, {
        unit: this,
        reachable: this.territory.reachableTerritories(this, moves)
      });
    }
  }

  onUnitSelected(data) {
    const alreadySelected = this.getState().selected;
    const nowSelected = !alreadySelected && this.equals(data.unit);
    if (alreadySelected && !data.unit) {
      scythe.store.dispatch(setSelectedUnit(null));
    } else if (nowSelected) {
      scythe.store.dispatch(setSelectedUnit(this));
    }
    this.setState({ selected: nowSelected });
  }

}
