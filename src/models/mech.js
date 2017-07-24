import Unit from 'models/unit';
import MechRenderer from 'renderers/mech';
import PubSub from 'pubsub-js';
import { MECH } from 'enums/units';
import { CREATED_UNIT } from 'enums/topics';

export default class Mech extends Unit {
  
  constructor(state) {
    super({ renderer: MechRenderer, state: state });
    PubSub.publish(CREATED_UNIT, { type: MECH, unit: this });
  }

}
