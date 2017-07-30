import Activity from 'activities/activity';

export default class ChooseBuildActivity extends Activity {

  do(stores) {
    console.log("Build");
  }

  undo(stores) {
  }

}
