import Unit from 'models/unit';
import CharacterRenderer from 'renderers/character';
import PubSub from 'pubsub-js';
import { CHARACTER } from 'enums/units';
import { CREATED_UNIT } from 'enums/topics';

export default class Character extends Unit {
  
  constructor(state) {
    super({
      renderer: CharacterRenderer,
      state: state,
      type: CHARACTER
    });
    PubSub.publish(CREATED_UNIT, { type: CHARACTER, unit: this });
  }

}
