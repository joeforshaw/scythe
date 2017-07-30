import Model from 'models/model';
import PlayerMatRenderer from 'renderers/player_mat';
import * as Actions from 'enums/actions';
import Copy from 'utils/copy';
import { ACTIVITY } from 'enums/topics';
import ChooseBolsterActivity from 'activities/bolster/choose_bolster';
import ChooseBuildActivity from 'activities/build/choose_build';
import ChooseDeployActivity from 'activities/deploy/choose_deploy';
import ChooseEnlistActivity from 'activities/enlist/choose_enlist';
import ChooseMoveActivity from 'activities/move/choose_move';
import ChooseProduceActivity from 'activities/produce/choose_produce';
import ChooseTradeActivity from 'activities/trade/choose_trade';
import ChooseUpgradeActivity from 'activities/upgrade/choose_upgrade';

export default class PlayerMat extends Model {

  constructor(state) {
    super({ renderer: PlayerMatRenderer, state: state });
  }

  onActionGroupClicked(group) {
  }

  onActionClicked(actionData) {
    PubSub.publish(ACTIVITY, actionToActivity(actionData.action));
  }

}

function actionToActivity(action) {
  switch (action) {
    case Actions.MOVE:    return new ChooseMoveActivity();
    case Actions.PRODUCE: return new ChooseProduceActivity();
    case Actions.TRADE:   return new ChooseTradeActivity();
    case Actions.BOLSTER: return new ChooseBolsterActivity();
    case Actions.UPGRADE: return new ChooseUpgradeActivity();
    case Actions.DEPLOY:  return new ChooseDeployActivity();
    case Actions.BUILD:   return new ChooseBuildActivity();
    case Actions.ENLIST:  return new ChooseEnlistActivity();
  }
}
