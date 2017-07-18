import scythe from 'scythe';
import UnitRenderer from 'renderers/unit';
import * as Factions from 'enums/factions';

export default class WorkerRenderer extends UnitRenderer {

  constructor(state) {
    super(state);
    scythe.game.add.sprite(state.x, state.y, 'worker-' + Factions.keys[state.faction]);
  }

}
