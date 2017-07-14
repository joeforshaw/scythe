import config from 'config/board';
import * as Territories from 'enums/territories';
import * as TerritorySides from 'enums/territory_sides';
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
        { x: 3, y: 1, type: Territories.VILLAGE, encounter: true, rivers: [TerritorySides.RIGHT, TerritorySides.BOTTOM_RIGHT] },
        { x: 4, y: 1, type: Territories.FOREST, rivers: [TerritorySides.LEFT, TerritorySides.BOTTTOM_LEFT] },
        { x: 5, y: 1, type: Territories.TUNDRA, rivers: [TerritorySides.RIGHT, TerritorySides.BOTTOM_RIGHT] },
        { x: 6, y: 1, type: Territories.VILLAGE, rivers: [TerritorySides.LEFT] }
      ],
      // Row 3
      [
        { x: 0, y: 2, type: Territories.LAKE },
        { x: 1, y: 2, type: Territories.TUNDRA, encounter: true, rivers: [TerritorySides.BOTTTOM_LEFT] },
        { x: 2, y: 2, type: Territories.LAKE },
        { x: 3, y: 2, type: Territories.TUNDRA, tunnel: true, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.RIGHT, TerritorySides.TOP_LEFT] },
        { x: 4, y: 2, type: Territories.MOUNTAIN, encounter: true, rivers: [TerritorySides.RIGHT, TerritorySides.BOTTOM_RIGHT, TerritorySides.LEFT] },
        { x: 5, y: 2, type: Territories.FARM, rivers: [TerritorySides.BOTTOM_RIGHT, TerritorySides.LEFT, TerritorySides.TOP_LEFT] },
        { x: 6, y: 2, type: Territories.FARM, encounter: true, rivers: [TerritorySides.BOTTOM_RIGHT, TerritorySides.BOTTTOM_LEFT] }
      ],
      // Row 4
      [
        { x: 0, y: 3, type: Territories.BASE, faction: Factions.POLANIA },
        { x: 1, y: 3, type: Territories.FOREST, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.RIGHT] },
        { x: 2, y: 3, type: Territories.MOUNTAIN, tunnel: true, rivers: [TerritorySides.BOTTTOM_LEFT, TerritorySides.LEFT] },
        { x: 3, y: 3, type: Territories.FOREST },
        { x: 4, y: 3, type: Territories.LAKE },
        { x: 5, y: 3, type: Territories.FOREST, tunnel: true, rivers: [TerritorySides.RIGHT, TerritorySides.BOTTOM_RIGHT, TerritorySides.TOP_LEFT] },
        { x: 6, y: 3, type: Territories.VILLAGE, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.LEFT, TerritorySides.TOP_LEFT] },
        { x: 7, y: 3, type: Territories.BASE, faction: Factions.RUSVIET, rivers: [TerritorySides.TOP_LEFT] }
      ],
      // Row 5
      [
        { x: 0, y: 4, type: Territories.FARM, rivers: [TerritorySides.BOTTOM_RIGHT, TerritorySides.BOTTTOM_LEFT] },
        { x: 1, y: 4, type: Territories.VILLAGE, encounter: true, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.BOTTOM_RIGHT, TerritorySides.BOTTTOM_LEFT] },
        { x: 4, y: 4, type: Territories.LAKE },
        { x: 3, y: 4, type: Territories.FACTORY },
        { x: 4, y: 4, type: Territories.MOUNTAIN, rivers: [TerritorySides.RIGHT] },
        { x: 5, y: 4, type: Territories.TUNDRA, encounter: true, rivers: [TerritorySides.BOTTTOM_LEFT, TerritorySides.LEFT, TerritorySides.TOP_LEFT] },
        { x: 6, y: 4, type: Territories.MOUNTAIN }
      ],
      // Row 6
      [
        { x: 0, y: 5, type: Territories.FOREST, encounter: true, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.BOTTOM_RIGHT] },
        { x: 1, y: 5, type: Territories.FOREST, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.BOTTOM_RIGHT, TerritorySides.BOTTTOM_LEFT, TerritorySides.TOP_LEFT] },
        { x: 2, y: 5, type: Territories.FARM, tunnel: true, rivers: [TerritorySides.BOTTTOM_LEFT, TerritorySides.TOP_LEFT] },
        { x: 3, y: 5, type: Territories.TUNDRA },
        { x: 4, y: 5, type: Territories.LAKE },
        { x: 5, y: 5, type: Territories.VILLAGE, tunnel: true, rivers: [TerritorySides.TOP_RIGHT] },
        { x: 6, y: 5, type: Territories.LAKE }
      ],
      // Row 7
      [
        { x: 0, y: 6, type: Territories.MOUNTAIN, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.TOP_LEFT] },
        { x: 1, y: 6, type: Territories.VILLAGE, encounter: true, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.RIGHT, TerritorySides.TOP_LEFT] },
        { x: 4, y: 6, type: Territories.VILLAGE, encounter: true, rivers: [TerritorySides.BOTTOM_RIGHT, TerritorySides.LEFT] },
        { x: 3, y: 6, type: Territories.TUNDRA, tunnel: true, rivers: [TerritorySides.BOTTOM_RIGHT, TerritorySides.BOTTTOM_LEFT] },
        { x: 4, y: 6, type: Territories.FOREST, rivers: [TerritorySides.BOTTTOM_LEFT] },
        { x: 5, y: 6, type: Territories.MOUNTAIN, encounter: true },
        { x: 6, y: 6, type: Territories.TUNDRA }
      ],
      // Row 8
      [
        { x: 0, y: 7, type: Territories.BASE, faction: Factions.SAXONY },
        { x: 1, y: 7, type: Territories.TUNDRA },
        { x: 2, y: 7, type: Territories.LAKE },
        { x: 3, y: 7, type: Territories.FARM, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.TOP_LEFT] },
        { x: 4, y: 7, type: Territories.MOUNTAIN, encounter: true, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.RIGHT, TerritorySides.TOP_LEFT] },
        { x: 5, y: 7, type: Territories.VILLAGE, rivers: [TerritorySides.LEFT] },
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