import Activity from 'activities/activity';
import ProduceOnTerritoryActivity from 'activities/produce/produce_on_territory';

export default class ChooseProduceActivity extends Activity {

  do(stores) {
    console.log("ChooseProduceActivity");
    const playerState = stores.players.get().currentPlayer.state.get();
    const workers = stores.units.get().units[playerState.faction].workers;
    this.territories = _.map(workers, function(w) { return w.state.get().territory });
    _.each(this.territories, function(t) {
      t.state.set({
        selectable: true,
        onClickActivity: new ProduceOnTerritoryActivity(t)
      });
    });
  }

  undo(stores) {
    // _.each(this.territories, function(t) { t.state.set({ selectable: false }); });
  }

}
