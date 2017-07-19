import scythe from 'scythe';
import Model from 'models/model';
import UnitRenderer from 'renderers/unit';
import PubSub from 'pubsub-js';
import { SELECTED_UNIT } from 'enums/topics';
import { setSelectedUnit } from 'store/actions';

export default class Unit extends Model {

  constructor(params) {
    super(params);
    const self = this;
    PubSub.subscribe(SELECTED_UNIT, function(msg, data) { self.onUnitSelected(data); });
  }

  numberOfMoves() {
    return 1; // TODO
  }

  onClicked(sprite) {
    const moves = this.numberOfMoves();
    const alreadySelected = this.getState().selected;
    if (alreadySelected) {
      PubSub.publish(SELECTED_UNIT, { unit: null, reachable: {} });
    } else {
      PubSub.publish(SELECTED_UNIT, {
        unit: this,
        reachable: this.territory.reachableTerritories(moves)
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
