import scythe from 'scythe';
import PubSub from 'pubsub-js';
import * as Topics from 'enums/topics';
import StateContainer from 'utils/state_container';

export default class Model {

  constructor(params) {
    if (params.renderer) { this.initRender(params); }
    this.initState(params);
    this.id = this.generateID(16);
  }
  
  initRender(params) {
    const self = this;
    let renderer = new params.renderer(self, params.state);
    self.update = function() {
      if (!renderer.update) { return; }
      renderer.update(self);
    }
  }

  initState(initialState) {
    const self = this;
    self.state = new StateContainer(initialState.state, function(newState) {
      if (self.update) { self.update(); }
    });
  }

  equals(model) {
    return model && this.id === model.id;
  }

  center() {
    const state = this.state.get();
    return {
      x: state.x + (state.width / 2),
      y: state.y + (state.height / 2)
    };
  }

  positionForCommonCentre(model) {
    const state = this.state.get();
    const modelState = model.state.get();
    const centre = {
      x: state.x - ((modelState.width  - state.width) / 2),
      y: state.y - ((modelState.height - state.height) / 2)
    }
    return centre;
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
