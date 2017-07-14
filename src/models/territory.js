import Model from 'models/model';
import TerritoryRenderer from 'renderers/territory';
import scythe from 'scythe';

export default class Territory extends Model {
  
  constructor(state) {
    super({
      renderer: TerritoryRenderer,
      state: state
    });
  }

}
