export default class State {

  constructor(intialState, onChanged) {
    let state = Object.assign({}, intialState);
    this.set = function(newState) {
      Object.assign(state, newState);
      if (onChanged) { onChanged(state); }
    };
    this.get = function() {
      return Object.assign({}, state);
    };
  }

}
