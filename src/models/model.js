import PubSub from 'pubsub-js';
import { store } from 'store/store';
import * as Topics from 'enums/topics';

export default class Model {

  constructor(params) {
    this.initState(params);
    this.initRender(params);
    
    const self = this;
    this.lastTick = 0;
    store.subscribe(function() {
      const state = store.getState();
      const currentTick = state.tick;
      if (self.onStateChanged) {
        self.onStateChanged(state);
      }
      if (self.update && self.lastTick < currentTick) {
        self.update(store.getState());
      }
      self.lastTick = currentTick;
    });
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

  onCreated(createdTopic) {
    console.log('onCreated', createdTopic);
    PubSub.publish(createdTopic, { instance: this })
  }

}
