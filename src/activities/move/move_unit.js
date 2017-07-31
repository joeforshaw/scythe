import Activity from 'activities/activity';

export default class MoveUnitActivity extends Activity {

  constructor(unit, to) {
    super();
    this.unit = unit;
    this.to = to;
  }

  do(stores) {
    // Remove unit from old territory's units
    const territories = stores.territories.get().territories;
    const from = this.unit.state.get().territory;
    if (from) {
      const fromState = from.state.get();
      delete fromState.units[this.unit.id];
      territories[fromState.row][fromState.column].state.set({ units: fromState.units });
    }

    // Set unit's territory
    this.unit.state.set({ territory: territories[this.to.row][this.to.column] });

    // Set territory's units
    const territoryUnits = territories[this.to.row][this.to.column].state.get().units;
    territoryUnits[this.unit.id] = this.unit;
    territories[this.to.row][this.to.column].state.set({ units: territoryUnits });

    // Position unit on territory
    const territoryCenter = territories[this.to.row][this.to.column].center();
    const unitState = this.unit.state.get();
    const unitPosition = territories[this.to.row][this.to.column].positionForUnit(this.unit);
    this.unit.state.set(unitPosition);
  }

  undo(stores) { }

}
