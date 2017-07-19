import scythe from 'scythe';
import Model from 'models/model';
import UnitRenderer from 'renderers/unit';
import PubSub from 'pubsub-js';
import { SELECTED_UNIT } from 'enums/topics';

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
    PubSub.publish(SELECTED_UNIT, {
      unit: this,
      reachable: this.territory.reachableTerritories(moves)
    });
  }

  onUnitSelected(data) {
    const alreadySelected = this.getState().selected;
    const nowSelected = !alreadySelected && this.equals(data.unit);
    this.setState({ selected:nowSelected });
  }

}
