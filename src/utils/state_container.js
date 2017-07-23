export default class State {

  constructor(intialState, onChanged) {
    let state = Object.assign({}, intialState.state);
    this.set = function(newState) {
      Object.assign(state, newState);
      onChanged(state);
    };
    this.get = function() {
      return Object.assign({}, state); 
    };
  }

}
