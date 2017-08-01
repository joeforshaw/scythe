import Activity from 'activities/activity';
import ProduceOnTerritoryActivity from 'activities/produce/produce_on_territory';

export default class ChooseProduceActivity extends Activity {

  do(stores) {
    const playerState = stores.players.get().currentPlayer.state.get();
    const workers = stores.units.get().units[playerState.faction].workers;
    this.territories = _.map(workers, function(w) { return w.state.get().territory });
    let produceCount = 0;
    _.each(this.territories, function(t) {
      t.state.set({
        selectable: true,
        onClickActivity: new ProduceOnTerritoryActivity({
          territory: t,
          maxProduces: 2, // TODO
          produceCount: function() { return produceCount; },
          incrementProduceCount: function() { produceCount++; },
        })
      });
    });
  }

  undo(stores) {
    // _.each(this.territories, function(t) { t.state.set({ selectable: false }); });
  }

}
