import config from 'config/board';
import * as Territories from 'enums/territories';
import * as Factions from 'enums/factions';

export default class Board {
  
  constructor() {
    this.territoryCoordinates = [
      // Row 1
      [
        { x: 1, y: 0, type: Territories.BASE, faction: Factions.ALBION },
        { x: 4, y: 0, type: Territories.BASE, faction: Factions.NORDIC }
      ],
      // Row 2
      [
        { x: 1, y: 1, type: Territories.MOUNTAIN },
        { x: 2, y: 1, type: Territories.FARM },
        { x: 3, y: 1, type: Territories.VILLAGE, encounter: true },
        { x: 4, y: 1, type: Territories.FOREST },
        { x: 5, y: 1, type: Territories.TUNDRA },
        { x: 6, y: 1, type: Territories.VILLAGE }
      ],
      // Row 3
      [
        { x: 0, y: 2, type: Territories.LAKE },
        { x: 1, y: 2, type: Territories.TUNDRA, encounter: true },
        { x: 2, y: 2, type: Territories.LAKE },
        { x: 3, y: 2, type: Territories.TUNDRA, tunnel: true },
        { x: 4, y: 2, type: Territories.MOUNTAIN, encounter: true },
        { x: 5, y: 2, type: Territories.FARM },
        { x: 6, y: 2, type: Territories.FARM, encounter: true }
      ],
      // Row 4
      [
        { x: 0, y: 3, type: Territories.BASE, faction: Factions.POLANIA },
        { x: 1, y: 3, type: Territories.FOREST },
        { x: 2, y: 3, type: Territories.MOUNTAIN, tunnel: true },
        { x: 3, y: 3, type: Territories.FOREST },
        { x: 4, y: 3, type: Territories.LAKE },
        { x: 5, y: 3, type: Territories.FOREST, tunnel: true },
        { x: 6, y: 3, type: Territories.VILLAGE },
        { x: 7, y: 3, type: Territories.BASE, faction: Factions.RUSVIET }
      ],
      // Row 5
      [
        { x: 0, y: 4, type: Territories.FARM },
        { x: 1, y: 4, type: Territories.VILLAGE, encounter: true },
        { x: 4, y: 4, type: Territories.LAKE },
        { x: 3, y: 4, type: Territories.FACTORY },
        { x: 4, y: 4, type: Territories.MOUNTAIN },
        { x: 5, y: 4, type: Territories.TUNDRA, encounter: true },
        { x: 6, y: 4, type: Territories.MOUNTAIN }
      ],
      // Row 6
      [
        { x: 0, y: 5, type: Territories.FOREST, encounter: true },
        { x: 1, y: 5, type: Territories.FOREST },
        { x: 2, y: 5, type: Territories.FARM, tunnel: true },
        { x: 3, y: 5, type: Territories.TUNDRA },
        { x: 4, y: 5, type: Territories.LAKE },
        { x: 5, y: 5, type: Territories.VILLAGE, tunnel: true },
        { x: 6, y: 5, type: Territories.LAKE }
      ],
      // Row 7
      [
        { x: 0, y: 6, type: Territories.MOUNTAIN },
        { x: 1, y: 6, type: Territories.VILLAGE },
        { x: 4, y: 6, type: Territories.VILLAGE },
        { x: 3, y: 6, type: Territories.TUNDRA, tunnel: true },
        { x: 4, y: 6, type: Territories.FOREST },
        { x: 5, y: 6, type: Territories.MOUNTAIN },
        { x: 6, y: 6, type: Territories.TUNDRA }
      ],
      // Row 8
      [
        { x: 0, y: 7, type: Territories.BASE, faction: Factions.SAXONY },
        { x: 1, y: 7, type: Territories.TUNDRA },
        { x: 2, y: 7, type: Territories.LAKE },
        { x: 3, y: 7, type: Territories.FARM },
        { x: 4, y: 7, type: Territories.MOUNTAIN },
        { x: 5, y: 7, type: Territories.VILLAGE },
        { x: 6, y: 7, type: Territories.FARM },
        { x: 7, y: 7, type: Territories.BASE, faction: Factions.TOGAWA }
      ],
      // Row 9
      [
        { x: 2, y: 8, type: Territories.BASE, faction: Factions.CRIMEA },
        { x: 3, y: 8, type: Territories.VILLAGE }
      ]
    ]
  }

  render() {
      console.log('test');
  }

}