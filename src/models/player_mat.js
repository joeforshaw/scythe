import Model from 'models/model';
import PlayerMatRenderer from 'renderers/player_mat';
import * as Actions from 'enums/actions';
import Copy from 'utils/copy';
import {
  CREATED_PLAYER_MAT,
  SELECTED_ACTION_GROUP,
  SELECTED_ACTION_MOVE,
  SELECTED_ACTION_PRODUCE,
  SELECTED_ACTION_TRADE,
  SELECTED_ACTION_BOLSTER,
  SELECTED_ACTION_UPGRADE,
  SELECTED_ACTION_DEPLOY,
  SELECTED_ACTION_BUILD,
  SELECTED_ACTION_ENLIST
} from 'enums/topics';

export default class PlayerMat extends Model {

  constructor(state) {
    super({ renderer: PlayerMatRenderer, state: state });
    PubSub.publish(CREATED_PLAYER_MAT, { player: state });
  }

  onActionGroupClicked(group) {
    PubSub.publish(SELECTED_ACTION_GROUP, {
      playerMat: this,
      group:     group
    });
  }

  onActionClicked(actionData) {
    const topic = actionToSelectedTopic(actionData.action);
    PubSub.publish(topic, {
      playerMat:  this,
      actionData: actionData
    });
  }

}

function actionToSelectedTopic(action) {
  switch (action) {
    case Actions.MOVE:    return SELECTED_ACTION_MOVE;
    case Actions.PRODUCE: return SELECTED_ACTION_PRODUCE;
    case Actions.TRADE:   return SELECTED_ACTION_TRADE;
    case Actions.BOLSTER: return SELECTED_ACTION_BOLSTER;
    case Actions.UPGRADE: return SELECTED_ACTION_UPGRADE;
    case Actions.DEPLOY:  return SELECTED_ACTION_DEPLOY;
    case Actions.BUILD:   return SELECTED_ACTION_BUILD;
    case Actions.ENLIST:  return SELECTED_ACTION_ENLIST;
  }
}
