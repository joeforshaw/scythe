import scythe from 'scythe';
import * as Factions from 'enums/factions';
import PubSub from 'pubsub-js';
import PlayerDirector from 'directors/player';
import TerritoryDirector from 'directors/territory';
import UnitDirector from 'directors/unit';
import ActionDirector from 'directors/action';

export default class Initializer {

  run() {
    PlayerDirector.init();
    TerritoryDirector.init();
    UnitDirector.init();
    ActionDirector.init();
  }

}
