import Unit from 'models/unit';
import CharacterRenderer from 'renderers/character';
import PubSub from 'pubsub-js';
import { CHARACTER } from 'enums/units';
import { CREATE_UNIT } from 'enums/topics';

export default class Character extends Unit {
  
  constructor(state) {
    super({ renderer: CharacterRenderer, state: state });
    PubSub.publish(CREATE_UNIT, { type: CHARACTER, unit: this });
  }

}
