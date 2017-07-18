import scythe from 'scythe';
import PubSub from 'pubsub-js';
import * as Topics from 'enums/topics';

export default class Model {

  constructor(params) {
    this.initState(params);
    this.initRender(params);
  }

  initState(params) {
    let state = {}
    this.setState = function(newState) {
      Object.assign(state, newState);
    };
    this.getState = function() {
      return Object.assign({}, state); 
    };
    this.setState(params.state ? params.state : {});
  }

  initRender(params) {
    let renderer = new params.renderer(params.state);
    this.update = function() {
      if (!renderer.update) { return; }
      renderer.update(this.getState());
    }
  }

  onCreated(createAction) {
    store.dispatch(createAction(this));
  }

}
