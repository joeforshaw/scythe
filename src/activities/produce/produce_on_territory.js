import Activity from 'activities/activity';
import Resource from 'models/resource';
import tokenConfig from 'config/token';
import * as Territories from 'enums/territories';
import { WORKER } from 'enums/units';
import { PRODUCE } from 'enums/actions';
import { ACTION_END } from 'enums/topics';

export default class ProduceOnTerritoryActivity extends Activity {

  do(stores) {
    this.props.incrementProduceCount();
    const resourceType = this.props.territory.resourceType();
    if (resourceType >= 0) {
      const workers = getWorkersOnTerritory(this.props.territory);
      this.props.resources = produceResourceForEachWorker(this.props.territory, workers);
      this.props.territory.addResources(this.props.resources);
      this.props.territory.deselect();
    } else {
      // Handle villages
    }
    if (this.props.produceCount() >= this.props.maxProduces) {
      PubSub.publish(ACTION_END, { type: PRODUCE });
    }
  }

  undo(stores) {
  }

}

function getWorkersOnTerritory(territory) {
  return _.filter(territory.state.get().units, function(u) {
    return u.state.get().type == WORKER;
  });
}

function produceResourceForEachWorker(territory, workers) {
  const resourceType = territory.resourceType();
  const resources = [];
  for (let id in workers) {
    const resourceState = { type: resourceType };
    Object.assign(resourceState, tokenConfig.resource);
    Object.assign(resourceState, territory.nextResourcePosition());
    resources.push(new Resource(resourceState));
  }
  return resources;
}
