import Activity from 'activities/activity';

export default class ChooseDeployActivity extends Activity {

  do(stores) {
    console.log("Deploy");
  }

  undo(stores) {
  }

}
