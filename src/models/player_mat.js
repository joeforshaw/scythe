import Model from 'models/model';
import { CREATED_PLAYER_MAT } from 'enums/topics';

export default class PlayerMat extends Model {

  constructor(state) {
    super({ state: state });
    PubSub.publish(CREATED_PLAYER_MAT, { player: state });
  }

}
