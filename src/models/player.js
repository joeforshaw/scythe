import Model from 'models/model';
import { CREATED_PLAYER } from 'enums/topics';

export default class Player extends Model {

  constructor(state) {
    super({ state: state });
    PubSub.publish(CREATED_PLAYER, { player: state });
  }

}
