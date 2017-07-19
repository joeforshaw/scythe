import scythe from 'scythe';
import UnitRenderer from 'renderers/unit';
import * as Factions from 'enums/factions';
import { MECH } from 'enums/units';

export default class MechRenderer extends UnitRenderer {

  constructor(model, state) {
    state.unitType = MECH;
    super(model, state);
  }

}
