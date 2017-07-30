import Activity from 'activities/activity';

export default class ChooseProduceActivity extends Activity {

  do(stores) {
    console.log("Produce");
    const playerState = stores.players.get().currentPlayer.state.get();
    const workers = stores.units.get().units[playerState.faction].workers;
    this.territories = _.map(workers, function(w) { return w.state.get().territory });
    _.each(this.territories, function(t) { t.state.set({ selectable: true }); });
  }

  undo(stores) {
    _.each(this.territories, function(t) { t.state.set({ selectable: false }); });
  }

}
