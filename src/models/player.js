import Model from 'models/model';
import { CREATE_PLAYER } from 'enums/topics';

export default class Player extends Model {

  constructor(state) {
    super({ state: state });
    PubSub.publish(CREATE_PLAYER, { player: state });
  }

}
