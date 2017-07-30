import Activity from 'activities/activity';

export default class ChooseMoveActivity extends Activity {

  do(stores) {
    console.log("Move");
  }

  undo(stores) {
  }

}
