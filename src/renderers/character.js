import scythe from 'scythe';
import UnitRenderer from 'renderers/unit';
import * as Factions from 'enums/factions';
import { CHARACTER } from 'enums/units';

export default class CharacterRenderer extends UnitRenderer {

  constructor(state) {
    state.unitType = CHARACTER;
    super(state);
  }

}
