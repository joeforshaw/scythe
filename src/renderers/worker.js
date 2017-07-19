import scythe from 'scythe';
import UnitRenderer from 'renderers/unit';
import * as Factions from 'enums/factions';
import { WORKER } from 'enums/units';

export default class WorkerRenderer extends UnitRenderer {

  constructor(state) {
    state.unitType = WORKER;
    super(state);
  }

}
