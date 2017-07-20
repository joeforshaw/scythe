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
    this.initialiseTraverseRules();
    PubSub.subscribe(SELECTED_UNIT, function(msg, data) { self.onUnitSelected(data); });
  }

  numberOfMoves() {
    return 1; // TODO
  }

  initialiseTraverseRules() {
    this.traverseRules = [];
    this.addTraverseRule(function(state, territory) {
      const territoryState = territory.getState();
      console.log(territoryState.type == Territories.BASE, territoryState.faction != state.faction);
      if (territoryState.type == Territories.BASE && territoryState.faction != state.faction) {
        return false;
      }
      return true;
    });
  }

  addTraverseRule(rule) {
    this.traverseRules.push(rule);
  }

  canTraverse(territory) {
    let canTraverse = true;
    const state = this.getState();
    for (let i = 0; i < this.traverseRules.length; i++) {
      const ruleResult = !this.traverseRules[i](state, territory);
      console.log(ruleResult);
      if (!ruleResult) { return false; }
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
