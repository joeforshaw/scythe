import Renderer from 'renderers/renderer';
import * as Units from 'enums/units';
import * as Factions from 'enums/factions';

export default class UnitRenderer extends Renderer {

  constructor(state) {
    super(state);
    this.addUnit(state);
  }

  update(state) {
    if (!this.unit) { return; }
    this.unit.x = state.x;
    this.unit.y = state.y;
  }

  addUnit(state) {
    const image = [this.spritePrefix(state.unitType), Factions.keys[state.faction]].join('-');
    this.unit = this.addSprite(state, image);
  }

  spritePrefix(unitType) {
    switch(unitType) {
      case Units.CHARACTER: return 'character';
      case Units.MECH:      return 'mech';
      case Units.WORKER:    return 'worker';
    }
  }

}
