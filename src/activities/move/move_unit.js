import Activity from 'activities/activity';

export default class MoveUnitActivity extends Activity {

  do(stores) {
    // Remove unit from old territory's units
    const territories = stores.territories.get().territories;
    const from = this.props.unit.state.get().territory;
    if (from) {
      const fromState = from.state.get();
      delete fromState.units[this.props.unit.id];
      territories[fromState.row][fromState.column].state.set({ units: fromState.units });
    }

    // Set unit's territory
    this.props.unit.state.set({ territory: territories[this.props.to.row][this.props.to.column] });

    // Set territory's units
    const territoryUnits = territories[this.props.to.row][this.props.to.column].state.get().units;
    territoryUnits[this.props.unit.id] = this.props.unit;
    territories[this.props.to.row][this.props.to.column].state.set({ units: territoryUnits });

    // Position unit on territory
    const territoryCenter = territories[this.props.to.row][this.props.to.column].center();
    const unitState = this.props.unit.state.get();
    const unitPosition = territories[this.props.to.row][this.props.to.column].nextUnitPosition(this.props.unit);
    this.props.unit.state.set(unitPosition);
  }

  undo(stores) { }

}
