import config from 'config/board';
import * as Territories from 'enums/territories';
import * as Factions from 'enums/factions';

export default class Board {
  
  constructor() {
    this.territoryCoordinates = [
      [ { x: 1, y: 0, type: Territories.BASE }, {x: 4, y: 0, type: Territories.BASE } ],
      [ {x:1,y:1}, {x:2,y:1}, {x:3,y:1}, {x:4,y:1}, {x:5,y:1}, {x:6,y:1} ],
      [ {x:0,y:2}, {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:4,y:2}, {x:5,y:2}, {x:6,y:2} ],
      [ {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:4,y:3}, {x:5,y:3}, {x:6,y:3}, {x:7,y:3} ],
      [ {x:0,y:4}, {x:1,y:4}, {x:4,y:4}, {x:3,y:4}, {x:4,y:4}, {x:5,y:4}, {x:6,y:4} ],
      [ {x:0,y:5}, {x:1,y:5}, {x:2,y:5}, {x:3,y:5}, {x:4,y:5}, {x:5,y:5}, {x:6,y:5} ],
      [ {x:0,y:6}, {x:1,y:6}, {x:4,y:6}, {x:3,y:6}, {x:4,y:6}, {x:5,y:6}, {x:6,y:6} ],
      [ {x:0,y:7}, {x:1,y:7}, {x:2,y:7}, {x:3,y:7}, {x:4,y:7}, {x:5,y:7}, {x:6,y:7}, {x:7,y:7} ],
      [ {x:2,y:8}, {x:3,y:8} ],
    ];
  }

  render() {
      console.log('test');
  }

}