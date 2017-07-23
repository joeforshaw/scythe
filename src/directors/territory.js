import Character from 'models/character';
import Mech from 'models/mech';
import Worker from 'models/worker';
import * as Factions from 'enums/factions';
import PubSub from 'pubsub-js';
import territoryConfig from 'config/territory';
import Territory from 'models/territory';
import * as Topics from 'enums/topics';
import {
  MOVED_UNIT,
  SELECTED_MOVEABLE_TERRITORY
} from 'enums/topics';

let territories = [];
let highlightedTerritories = {};
let selectedUnits = {};

export default class TerritoryDirector {

  static init() {
    territories = initializeTerritories();
    
    PubSub.subscribe(Topics.MOVE_UNIT, function(msg, data) {
      moveUnit(data.unit, data.to);
    });

    PubSub.subscribe(Topics.SELECTED_MOVEABLE_TERRITORY, function(msg, data) {
      let unit;
      for (let id in selectedUnits) {
        unit = selectedUnits[id];
        moveUnit(selectedUnits[id], data.to);
      }
      updateReachableTerritories(unit);
    });

    PubSub.subscribe(Topics.SELECTED_UNIT, function(msg, data) {
      updateReachableTerritories(data.unit, data.alreadySelected);
      data.unit.state.set({ selected: !data.alreadySelected });      
    });
  }

}

function initializeTerritories() {
  const newTerritories = [ [], [], [], [], [], [], [], [], [] ];
  for (let i = 0; i < territoryConfig.data.length; i++) {
    const row = territoryConfig.data[i];
    for (let j = 0; j < row.length; j++) {
      let item = row[j];
      const frame = territoryFrame(
        item.column,
        item.row,
        territoryConfig.territory.width,
        territoryConfig.territory.height
      );
      newTerritories[item.row][item.column] = new Territory(Object.assign(item, frame));
    }
  }
  return newTerritories;
}

function territoryFrame(column, row, width, height) {
  const offsets = { x: 0.87, y: 1.065 };
  return {
    x: ((row % 2 === 0 ? width / 2 : 0) + (column * width)) * offsets.x,
    y: ((height - (height / (2 * Math.tan(Math.PI/3)))) * row) * offsets.y,
    width: width,
    height: height
  };
}

function moveUnit(unit, to) {
  // Remove unit from old territory's units
  const from = unit.state.get().territory;
  if (from) {
    const fromState = from.state.get();
    delete fromState.units[unit.id];
    territories[fromState.row][fromState.column].state.set({ units: fromState.units });
  }
  
  // Set unit's territory
  unit.state.set({ territory: territories[to.row][to.column] });

  // Set territory's units
  const territoryUnits = territories[to.row][to.column].state.get().units;
  territoryUnits[unit.id] = unit;
  territories[to.row][to.column].state.set({ units: territoryUnits });
  
  // Position unit on territory
  const territoryCenter = territories[to.row][to.column].center();
  const unitState = unit.state.get();
  unit.state.set(territories[to.row][to.column].positionForCommonCentre(unit));

  const adjacentPositions = territories[to.row][to.column].adjacentPositions();

  PubSub.publish(MOVED_UNIT, { unit: unit });
}

function getMovableTerritories(unit, adjacentPositions) {
  const movableTerritories = {};
  for (let i = 0; i < adjacentPositions.length; i++) {
    const territory = getTerritory(adjacentPositions[i]);
    if (!territory) { continue; }
    const allowed = unit.canMoveTo({
      territories: territories,
      territory: territory,
      territoryState: territory.state.get(),
      side: adjacentPositions[i].side
    });
    if (!allowed) { continue; }
    movableTerritories[territory.id] = territory;
  }
  return movableTerritories;
}

function getTerritory(position) {
  const rowArray = territories[position.row];
  if (!rowArray) { return null; }
  return rowArray[position.column];
}

function numberOfMoves(unit) {
  return 1;
}

function updateReachableTerritories(unit, alreadySelected) {
  let movableTerritories = {};
  const unitState = unit.state.get();

  // Reset any selected territories
  for (let key in highlightedTerritories) {
    highlightedTerritories[key].state.set({ movable: false });
  }

  if (alreadySelected) {    
    delete selectedUnits[unit.id];
  } else {
    selectedUnits[unit.id] = unit;
    const territory = unitState.territory;
    const adjacentPositions = territory.adjacentPositions();
    movableTerritories = getMovableTerritories(unit, adjacentPositions);

    // Set selected territories
    for (let key in movableTerritories) {
      movableTerritories[key].state.set({ movable: true });
    }
  }

  highlightedTerritories = movableTerritories;
}
