import Activity from 'activities/activity';

export default class ProduceOnTerritoryActivity extends Activity {

  constructor(territory) {
    super();
    this.territory = territory;
  }

  do(stores) {
    console.log("ProduceOnTerritoryActivity");
  }

  undo(stores) {
  }

}
