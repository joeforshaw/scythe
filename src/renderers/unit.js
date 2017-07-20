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
    this.unit.x = state.x;
    this.unit.y = state.y;

    if (this.selectedSprite) { this.positionSelect(); }

    if (state.selected && !this.selectedSprite) {
      this.addSelect();
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

  addSelect() {
    const selectedImage = this.imageName('selected')
    this.selectedSprite = this.addSprite({ x: this.unit.x, y: this.unit.y }, selectedImage);
    this.positionSelect();
    this.sprites.sendToBack(this.selectedSprite);
  }

  removeSelect() {
    this.selectedSprite.destroy();
    this.selectedSprite = null;
  }

  positionSelect() {
    this.selectedSprite.x = this.unit.x;
    this.selectedSprite.y = this.unit.y;
    const pos = this.positionForCommonCentre(this.selectedSprite, this.unit);
    this.selectedSprite.x = pos.x;
    this.selectedSprite.y = pos.y;
  }

}
