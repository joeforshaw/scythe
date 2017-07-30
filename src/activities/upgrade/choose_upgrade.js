import Activity from 'activities/activity';

export default class ChooseUpgradeActivity extends Activity {

  do(stores) {
    console.log("Upgrade");
  }

  undo(stores) {
  }

}
