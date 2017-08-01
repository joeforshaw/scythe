import * as Territories from 'enums/territories';
import * as TerritorySides from 'enums/territory_sides';
import * as Factions from 'enums/factions';
import * as Units from 'enums/units';

const config = {
  width: 1024,
  height: 768,
  columns: 8,
  rows: 9,
  territory: {
    width: 100, //87,
    height: 100 //106
  },
  data: [
    // Row 1
    [
      { column: 1, row: 0, type: Territories.BASE, faction: Factions.ALBION },
      { column: 4, row: 0, type: Territories.BASE, faction: Factions.NORDIC }
    ],
    // Row 2
    [
      { column: 1, row: 1, type: Territories.MOUNTAIN },
      { column: 2, row: 1, type: Territories.FARM },
      { column: 3, row: 1, type: Territories.VILLAGE, encounter: true, rivers: [TerritorySides.RIGHT, TerritorySides.BOTTOM_RIGHT] },
      { column: 4, row: 1, type: Territories.FOREST, rivers: [TerritorySides.LEFT, TerritorySides.BOTTOM_LEFT] },
      { column: 5, row: 1, type: Territories.TUNDRA, rivers: [TerritorySides.RIGHT, TerritorySides.BOTTOM_RIGHT] },
      { column: 6, row: 1, type: Territories.VILLAGE, rivers: [TerritorySides.LEFT] }
    ],
    // Row 3
    [
      { column: 0, row: 2, type: Territories.LAKE },
      { column: 1, row: 2, type: Territories.TUNDRA, encounter: true, rivers: [TerritorySides.BOTTOM_LEFT] },
      { column: 2, row: 2, type: Territories.LAKE },
      { column: 3, row: 2, type: Territories.TUNDRA, tunnel: true, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.RIGHT, TerritorySides.TOP_LEFT] },
      { column: 4, row: 2, type: Territories.MOUNTAIN, encounter: true, rivers: [TerritorySides.RIGHT, TerritorySides.BOTTOM_RIGHT, TerritorySides.LEFT] },
      { column: 5, row: 2, type: Territories.FARM, rivers: [TerritorySides.BOTTOM_RIGHT, TerritorySides.LEFT, TerritorySides.TOP_LEFT] },
      { column: 6, row: 2, type: Territories.FARM, encounter: true, rivers: [TerritorySides.BOTTOM_RIGHT, TerritorySides.BOTTOM_LEFT] }
    ],
    // Row 4
    [
      { column: 0, row: 3, type: Territories.BASE, faction: Factions.POLANIA },
      { column: 1, row: 3, type: Territories.FOREST, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.RIGHT] },
      { column: 2, row: 3, type: Territories.MOUNTAIN, tunnel: true, rivers: [TerritorySides.BOTTOM_LEFT, TerritorySides.LEFT] },
      { column: 3, row: 3, type: Territories.FOREST },
      { column: 4, row: 3, type: Territories.LAKE },
      { column: 5, row: 3, type: Territories.FOREST, tunnel: true, rivers: [TerritorySides.RIGHT, TerritorySides.BOTTOM_RIGHT, TerritorySides.TOP_LEFT] },
      { column: 6, row: 3, type: Territories.VILLAGE, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.LEFT, TerritorySides.TOP_LEFT] },
      { column: 7, row: 3, type: Territories.BASE, faction: Factions.RUSVIET, rivers: [TerritorySides.TOP_LEFT] }
    ],
    // Row 5
    [
      { column: 0, row: 4, type: Territories.FARM, rivers: [TerritorySides.BOTTOM_RIGHT, TerritorySides.BOTTOM_LEFT] },
      { column: 1, row: 4, type: Territories.VILLAGE, encounter: true, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.BOTTOM_RIGHT, TerritorySides.BOTTOM_LEFT] },
      { column: 2, row: 4, type: Territories.LAKE },
      { column: 3, row: 4, type: Territories.FACTORY },
      { column: 4, row: 4, type: Territories.MOUNTAIN, rivers: [TerritorySides.RIGHT] },
      { column: 5, row: 4, type: Territories.TUNDRA, encounter: true, rivers: [TerritorySides.BOTTOM_LEFT, TerritorySides.LEFT, TerritorySides.TOP_LEFT] },
      { column: 6, row: 4, type: Territories.MOUNTAIN }
    ],
    // Row 6
    [
      { column: 0, row: 5, type: Territories.FOREST, encounter: true, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.BOTTOM_RIGHT] },
      { column: 1, row: 5, type: Territories.FOREST, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.BOTTOM_RIGHT, TerritorySides.BOTTOM_LEFT, TerritorySides.TOP_LEFT] },
      { column: 2, row: 5, type: Territories.FARM, tunnel: true, rivers: [TerritorySides.BOTTOM_LEFT, TerritorySides.TOP_LEFT] },
      { column: 3, row: 5, type: Territories.TUNDRA },
      { column: 4, row: 5, type: Territories.LAKE },
      { column: 5, row: 5, type: Territories.VILLAGE, tunnel: true, rivers: [TerritorySides.TOP_RIGHT] },
      { column: 6, row: 5, type: Territories.LAKE }
    ],
    // Row 7
    [
      { column: 0, row: 6, type: Territories.MOUNTAIN, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.TOP_LEFT] },
      { column: 1, row: 6, type: Territories.VILLAGE, encounter: true, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.RIGHT, TerritorySides.TOP_LEFT] },
      { column: 2, row: 6, type: Territories.VILLAGE, encounter: true, rivers: [TerritorySides.BOTTOM_RIGHT, TerritorySides.LEFT] },
      { column: 3, row: 6, type: Territories.TUNDRA, tunnel: true, rivers: [TerritorySides.BOTTOM_RIGHT, TerritorySides.BOTTOM_LEFT] },
      { column: 4, row: 6, type: Territories.FOREST, rivers: [TerritorySides.BOTTOM_LEFT] },
      { column: 5, row: 6, type: Territories.MOUNTAIN, encounter: true },
      { column: 6, row: 6, type: Territories.TUNDRA }
    ],
    // Row 8
    [
      { column: 0, row: 7, type: Territories.BASE, faction: Factions.SAXONY },
      { column: 1, row: 7, type: Territories.TUNDRA },
      { column: 2, row: 7, type: Territories.LAKE },
      { column: 3, row: 7, type: Territories.FARM, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.TOP_LEFT] },
      { column: 4, row: 7, type: Territories.MOUNTAIN, encounter: true, rivers: [TerritorySides.TOP_RIGHT, TerritorySides.RIGHT, TerritorySides.TOP_LEFT] },
      { column: 5, row: 7, type: Territories.VILLAGE, rivers: [TerritorySides.LEFT] },
      { column: 6, row: 7, type: Territories.FARM },
      { column: 7, row: 7, type: Territories.BASE, faction: Factions.TOGAWA }
    ],
    // Row 9
    [
      { column: 2, row: 8, type: Territories.BASE, faction: Factions.CRIMEA },
      { column: 3, row: 8, type: Territories.VILLAGE }
    ]
  ],
  factory: { column: 3, row: 4 },
  tunnels: [
    { column: 3, row: 2 },
    { column: 2, row: 3 },
    { column: 5, row: 3 },
    { column: 2, row: 5 },
    { column: 5, row: 5 },
    { column: 3, row: 6 }
  ],
  mountains: [
    { column: 1, row: 1 },
    { column: 4, row: 2 },
    { column: 2, row: 3 },
    { column: 4, row: 4 },
    { column: 6, row: 4 },
    { column: 0, row: 6 },
    { column: 5, row: 6 },
    { column: 4, row: 7 }
  ],
  villages: [
    { column: 3, row: 1 },
    { column: 6, row: 1 },
    { column: 6, row: 3 },
    { column: 1, row: 4 },
    { column: 5, row: 5 },
    { column: 1, row: 6 },
    { column: 2, row: 6 },
    { column: 5, row: 7 },
    { column: 3, row: 8 }
  ],
  lakes: [
    { column: 0, row: 2 },
    { column: 2, row: 2 },
    { column: 4, row: 3 },
    { column: 2, row: 4 },
    { column: 4, row: 5 },
    { column: 6, row: 5 },
    { column: 2, row: 7 }
  ]
};

config.unitPositions = [];
config.unitPositions[Units.CHARACTER] = [
  { x: 0.2, y: 0.2 },
];
config.unitPositions[Units.MECH] = [
  { x: 0.21, y: 0.19 },
  { x: 0.22, y: 0.18 },
  { x: 0.23, y: 0.17 },
  { x: 0.24, y: 0.16 }
];
config.unitPositions[Units.WORKER] = [
  { x: 0.52, y: 0.62 },
  { x: 0.53, y: 0.63 },
  { x: 0.54, y: 0.62 },
  { x: 0.55, y: 0.61 },
  { x: 0.56, y: 0.6  },
  { x: 0.57, y: 0.59 },
  { x: 0.58, y: 0.58 },
  { x: 0.59, y: 0.56 }
];

config.resourcePositions = [
  { x: 0.20, y: 0.62 },
  { x: 0.22, y: 0.65 },
  { x: 0.24, y: 0.68 },
  { x: 0.26, y: 0.71 },
  { x: 0.28, y: 0.74 },
  { x: 0.30, y: 0.77 },
  { x: 0.32, y: 0.80 },
  { x: 0.34, y: 0.83 }
];

export default config;