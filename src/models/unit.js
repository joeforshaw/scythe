import Model from 'models/model';
import UnitRenderer from 'renderers/unit';
import PubSub from 'pubsub-js';
import { SELECTED_UNIT } from 'enums/topics';

export default class Unit extends Model {

  constructor(params) {
    super(params);
    const self = this;
    PubSub.subscribe(SELECTED_UNIT, function(msg, data) { self.onUnitSelected(msg, data); });
  }

  onClicked(sprite) {
    PubSub.publish(SELECTED_UNIT, { unit: this });
  }

  onUnitSelected(msg, data) {
    this.setState({ selected: this.equals(data.unit) });
  }

}
