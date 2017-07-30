import PubSub from 'pubsub-js';
import {
  ACTIVITY,
  ACTIVITY_UNDO,
  ACTIVITY_REDO
} from 'enums/topics';

const undoStack = [];
const redoStack = [];
const stores = {};

export default class Bus {

  constructor(initializers) {
    initializeStores(initializers);
    performInitialActivities(initializers);
    subscribeToTopics();
  }

}

function initializeStores(initializers) {
  for (let key in initializers) {
    if (!initializers[key].createStore) { continue; }
    stores[key] = initializers[key].createStore();
  }
}

function performInitialActivities(initializers) {
  for (let key in initializers) {
    if (!initializers[key].initialActivities) { continue; }
    const activities = initializers[key].initialActivities(copyOfStores());
    for (let i = 0; i < activities.length; i++) {
      performDo(activities[i]);
    }
  }
}

function subscribeToTopics() {
  PubSub.subscribe(ACTIVITY,      function(msg, activity) { add(activity); });
  PubSub.subscribe(ACTIVITY_UNDO, function(msg, data)     { undo(); });
  PubSub.subscribe(ACTIVITY_REDO, function(msg, data)     { redo(); });
}

function add(activity) {
  redoStack.length = 0;
  performDo(activity);
  undoStack.push(activity);
}

function undo() {
  const activity = undoStack.pop();
  if (activity) {
    activity.undo(copyOfStores());
    redoStack.push(activity);
  }
}

function redo() {
  const activity = redoStack.pop();
  if (activity) {
    performDo(activity);
    undoStack.push(activity);
  }
}

function performDo(activity) {
  activity.do(copyOfStores());
}

function copyOfStores() {
  return Object.assign({}, stores);
}
