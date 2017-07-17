import Model from 'models/model';
import CharacterRenderer from 'renderers/character';

export default class Character extends Model {
  
  constructor(state) {
    super({ renderer: CharacterRenderer, state: state });
  }

  

}
