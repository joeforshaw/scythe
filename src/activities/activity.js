export default class Activity {

  constructor(props) {
    this.props = props ? props : {};
  }

  do () {}

  undoable() {
    return typeof this.undo !== 'undefined';
  }

}
