import Model from 'models/model';
import UnitRenderer from 'renderers/unit';

export default class Unit extends Model {
  
  constructor(state) {
    super({ renderer: UnitRenderer, state: state });
  }

}