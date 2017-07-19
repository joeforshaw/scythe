import scythe from 'scythe';
import Renderer from 'renderers/renderer';
import * as Units from 'enums/units';
import * as Factions from 'enums/factions';

export default class UnitRenderer extends Renderer {

  constructor(model, state) {
    super(model, state);
    this.unitType = state.unitType;
    this.addUnit(state);
    this.sprites.inputEnableChildren = true;
    this.sprites.onChildInputDown.add(function(sprite) {
      model.onClicked();
    }, this);
  }

  update(model) {
    if (!this.unit) { return; }
    const state = model.getState();
    // this.sprites.setAll('anchor', 0);
    this.sprites.setAll('x', state.x);
    this.sprites.setAll('y', state.y);
    if (state.selected && !this.selectedSprite) {
      this.addSelect(model.center());
    } else if (!state.selected && this.selectedSprite) {
      this.removeSelect();
    }
  }

  addUnit(state) {
    const image = this.imageName(Factions.keys[state.faction]);
    this.unit = this.addSprite(state, image);
    this.unit.inputEnabled = true;
  }

  imageName(key) {
    return [this.spritePrefix(this.unitType), key].join('-')
  }

  spritePrefix(unitType) {
    switch(unitType) {
      case Units.CHARACTER: return 'character';
      case Units.MECH:      return 'mech';
      case Units.WORKER:    return 'worker';
    }
  }

  addSelect(center) {
    const selectedImage = this.imageName('selected')
    this.selectedSprite = this.addSprite(center, selectedImage);
    this.selectedSprite.anchor.set(0.5);
    this.sprites.sendToBack(this.selectedSprite);
  }

  removeSelect() {
    this.selectedSprite.destroy();
    this.selectedSprite = null;
  }

}
