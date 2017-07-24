import * as Actions from 'enums/actions';
import * as PlayerMats from 'enums/player_mats';

const config = {};

// Top row actions
for (let i = 0; i < PlayerMats.all; i++) {
  config[PlayerMats.all[i]].actions[Actions.MOVE] = {
    cost: [],
    benefit: [
      [ { move: 2, max: 3 } ],
      [ { coin: 1, max: 1 } ],
    ]
  };
  config[PlayerMats.all[i]].actions[Actions.TRADE] = {
    cost: [
      { coin: 1, min: 1 }
    ],
    benefit: [
      { resource: 2, max: 2 },
      { popularity: 1, max: 2 }
    ]
  };
  config[PlayerMats.all[i]].actions[Actions.PRODUCE] = {
    cost: [
      { power: 0, max: 1 },
      { popularity: 0, max: 1 },
      { coin: 0, max: 1 }
    ],
    benefit: [
      [ { move: 2, max: 3 } ],
      [ { coin: 1, max: 1 } ],
    ]
  };
  config[PlayerMats.all[i]].actions[Actions.BOLSTER] = {
    cost: [
      { coin: 1, min: 1 }
    ],
    benefit: [
      [ { power: 2, max: 3 }, { popularity: 0, max: 1 } ],
      [ { combatCards: 1, max: 2 }, { popularity: 0, max: 1 } ],
    ]
  };
}

// Bottom row actions
config[PlayerMats.INDUSTRIAL] = { actions: {} };
config[PlayerMats.INDUSTRIAL].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 3, min: 2 },
  ],
  benefit: [
    { upgrade: 1, max: 1 },
    { coin: 3, max: 3 },
    { power: 0, max: 1 },
  ]
};
config[PlayerMats.INDUSTRIAL].actions[Actions.DEPLOY] = {

};
config[PlayerMats.INDUSTRIAL].actions[Actions.BUILD] = {

};
config[PlayerMats.INDUSTRIAL].actions[Actions.ENLIST] = {

};

config[PlayerMats.ENGINEERING] = { actions: {} };

config[PlayerMats.ENGINEERING].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 3, min: 2 },
  ],
  benefit: [
    { upgrade: 1, max: 1 },
    { coin: 2, max: 2 },
    { power: 0, max: 1 },
  ]
};
config[PlayerMats.ENGINEERING].actions[Actions.DEPLOY] = {

};
config[PlayerMats.ENGINEERING].actions[Actions.BUILD] = {

};
config[PlayerMats.ENGINEERING].actions[Actions.ENLIST] = {

};

config[PlayerMats.MILITANT] = { actions: {} };

config[PlayerMats.MILITANT].actions[Actions.UPGRADE] = {

};
config[PlayerMats.MILITANT].actions[Actions.DEPLOY] = {

};
config[PlayerMats.MILITANT].actions[Actions.BUILD] = {

};
config[PlayerMats.MILITANT].actions[Actions.ENLIST] = {

};

config[PlayerMats.PATRIOTIC] = { actions: {} };
config[PlayerMats.PATRIOTIC].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 2, min: 2 },
  ],
  benefit: [
    { upgrade: 1, max: 1 },
    { coin: 1, max: 1 },
    { power: 0, max: 1 },
  ]
};
config[PlayerMats.PATRIOTIC].actions[Actions.DEPLOY] = {

};
config[PlayerMats.PATRIOTIC].actions[Actions.BUILD] = {

};
config[PlayerMats.PATRIOTIC].actions[Actions.ENLIST] = {

};

config[PlayerMats.INNOVATIVE] = { actions: {} };

config[PlayerMats.INNOVATIVE].actions[Actions.UPGRADE] = {

};
config[PlayerMats.INNOVATIVE].actions[Actions.DEPLOY] = {

};
config[PlayerMats.INNOVATIVE].actions[Actions.BUILD] = {

};
config[PlayerMats.INNOVATIVE].actions[Actions.ENLIST] = {

};

config[PlayerMats.MECHANICAL] = { actions: {} };
config[PlayerMats.MECHANICAL].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 3, min: 2 },
  ],
  benefit: [
    { upgrade: 1, max: 1 },
    { power: 0, max: 1 },
  ]
};
config[PlayerMats.MECHANICAL].actions[Actions.DEPLOY] = {

};
config[PlayerMats.MECHANICAL].actions[Actions.BUILD] = {

};
config[PlayerMats.MECHANICAL].actions[Actions.ENLIST] = {

};

config[PlayerMats.AGRICULTURAL] = { actions: {} };
config[PlayerMats.AGRICULTURAL].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 2, min: 2 },
  ],
  benefit: [
    { upgrade: 1, max: 1 },
    { coin: 1, max: 1 },
    { power: 0, max: 1 },
  ]
};
config[PlayerMats.AGRICULTURAL].actions[Actions.DEPLOY] = {

};
config[PlayerMats.AGRICULTURAL].actions[Actions.BUILD] = {

};
config[PlayerMats.AGRICULTURAL].actions[Actions.ENLIST] = {

};

export default config;
