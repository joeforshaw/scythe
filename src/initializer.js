import scythe from 'scythe';
import { initialize, moveUnit } from 'store/actions';
import * as Factions from 'enums/factions';
import PubSub from 'pubsub-js';
import TerritoryDirector from 'directors/territory';
import UnitDirector from 'directors/unit';

export default class Initializer {

  run() {
    TerritoryDirector.init();
    UnitDirector.init();
  }

}
