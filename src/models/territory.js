import Model from 'models/model';
import TerritoryRenderer from 'renderers/territory';
import scythe from 'scythe';
import { createTerritory } from 'store/actions';

export default class Territory extends Model {
  
  constructor(state) {
    super({ renderer: TerritoryRenderer, state: state });
    this.onCreated(createTerritory)
  }

  addActor() {
    
  }

}
