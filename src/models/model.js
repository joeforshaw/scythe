import scythe from 'scythe';
import PubSub from 'pubsub-js';
import * as Topics from 'enums/topics';

export default class Model {

  constructor(params) {
    this.initRender(params);
    this.initState(params);
    this.id = this.generateID(16);
  }

  initState(params) {
    const self = this;
    let state = {}
    self.setState = function(newState) {
      Object.assign(state, newState);
      self.update();
    };
    self.getState = function() {
      return Object.assign({}, state); 
    };
    self.setState(params.state ? params.state : {});
  }

  initRender(params) {
    const self = this;
    let renderer = new params.renderer(params.state);
    self.update = function() {
      if (!renderer.update) { return; }
      renderer.update(self.getState());
    }
  }

  onCreated(createAction) {
    store.dispatch(createAction(this));
  }

  center() {
    const state = this.getState();
    return {
      x: state.x + (state.width / 2),
      y: state.y + (state.height / 2)
    };
  }

  generateID(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}
