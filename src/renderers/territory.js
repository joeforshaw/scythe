import Renderer from 'renderers/renderer';
import scythe from 'scythe';

export default class TerritoryRenderer extends Renderer {

  constructor(state) {
    super();
    this.sprite = scythe.game.add.sprite(state.x, state.y, "territory");
  }

  render(state) {
    
  }

}
