import * as Actions from 'enums/actions';
import * as PlayerMats from 'enums/player_mats';

const config = {
  initial: {}
};

// Top row actions
for (let i = 0; i < PlayerMats.all; i++) {
  config.initial[PlayerMats.all[i]].actions[Actions.MOVE] = {
    cost: [],
    benefit: [
      [ { move: 2, upgrades: 1 } ],
      [ { coin: 1 } ],
    ]
  };
  config.initial[PlayerMats.all[i]].actions[Actions.TRADE] = {
    cost: [
      { coin: 1 }
    ],
    benefit: [
      { resource: 2 },
      { popularity: 1, upgrades: 1 }
    ]
  };
  config.initial[PlayerMats.all[i]].actions[Actions.PRODUCE] = {
    cost: [
      { power: 0, downgrades: 1 },
      { popularity: 0, downgrades: 1 },
      { coin: 0, downgrades: 1 }
    ],
    benefit: [
      [ { produce: 2, upgrades: 1 } ],
    ]
  };
  config.initial[PlayerMats.all[i]].actions[Actions.BOLSTER] = {
    cost: [
      { coin: 1 }
    ],
    benefit: [
      [ { power: 2, upgrades: 1 } ],
      [ { combatCards: 1, upgrades: 1 } ],
    ]
  };
}

// Bottom row actions
config.initial[PlayerMats.INDUSTRIAL] = { actions: {} };
config.initial[PlayerMats.INDUSTRIAL].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 3, upgrades: 1 },
  ],
  benefit: [
    { upgrade: 1 },
    { coin: 3 },
    { power: 0 },
  ]
};
config.initial[PlayerMats.INDUSTRIAL].actions[Actions.DEPLOY] = {
  cost: [
    { metal: 3, upgrades: 2 },
  ],
  benefit: [
    { deploy: 1 },
    { coin: 2 }
  ]
};
config.initial[PlayerMats.INDUSTRIAL].actions[Actions.BUILD] = {
  cost: [
    { wood: 3, upgrades: 1 },
  ],
  benefit: [
    { build: 1 },
    { coin: 1 }
  ]
};
config.initial[PlayerMats.INDUSTRIAL].actions[Actions.ENLIST] = {
  cost: [
    { food: 4, upgrades: 2 },
  ],
  benefit: [
    { enlist: 1 }
  ]
};

config.initial[PlayerMats.ENGINEERING] = { actions: {} };
config.initial[PlayerMats.ENGINEERING].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 3, upgrades: 1 },
  ],
  benefit: [
    { upgrade: 1 },
    { coin: 2 },
  ]
};
config.initial[PlayerMats.ENGINEERING].actions[Actions.DEPLOY] = {
  cost: [
    { metal: 4, upgrades: 2 },
  ],
  benefit: [
    { deploy: 1 },
  ]
};
config.initial[PlayerMats.ENGINEERING].actions[Actions.BUILD] = {
  cost: [
    { wood: 3, upgrades: 2 },
  ],
  benefit: [
    { build: 1 },
    { coin: 3 }
  ]
};
config.initial[PlayerMats.ENGINEERING].actions[Actions.ENLIST] = {
  cost: [
    { food: 3, upgrades: 1 },
  ],
  benefit: [
    { enlist: 1 },
    { coin: 1 }
  ]
};

config.initial[PlayerMats.MILITANT] = { actions: {} };
config.initial[PlayerMats.MILITANT].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 3, upgrades: 2 },
  ],
  benefit: [
    { upgrade: 1 },
  ]
};
config.initial[PlayerMats.MILITANT].actions[Actions.DEPLOY] = {
  cost: [
    { metal: 3, upgrades: 1 },
  ],
  benefit: [
    { deploy: 1 },
    { coin: 3 }
  ]
};
config.initial[PlayerMats.MILITANT].actions[Actions.BUILD] = {
  cost: [
    { wood: 4, upgrades: 1 },
  ],
  benefit: [
    { build: 1 },
    { coin: 1 }
  ]
};
config.initial[PlayerMats.MILITANT].actions[Actions.ENLIST] = {
  cost: [
    { food: 3, upgrades: 2 },
  ],
  benefit: [
    { enlist: 1 },
    { coin: 2 }
  ]
};

config.initial[PlayerMats.PATRIOTIC] = { actions: {} };
config.initial[PlayerMats.PATRIOTIC].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 2 },
  ],
  benefit: [
    { upgrade: 1 },
    { coin: 1 }
  ]
};
config.initial[PlayerMats.PATRIOTIC].actions[Actions.DEPLOY] = {
  cost: [
    { metal: 4, upgrades: 3 },
  ],
  benefit: [
    { deploy: 1 },
    { coin: 3 }
  ]
};
config.initial[PlayerMats.PATRIOTIC].actions[Actions.BUILD] = {
  cost: [
    { wood: 4, upgrades: 2 },
  ],
  benefit: [
    { build: 1 },
  ]
};
config.initial[PlayerMats.PATRIOTIC].actions[Actions.ENLIST] = {
  cost: [
    { food: 3, upgrades: 1 },
  ],
  benefit: [
    { enlist: 1 },
    { coin: 2 }
  ]
};

config.initial[PlayerMats.INNOVATIVE] = { actions: {} };
config.initial[PlayerMats.INNOVATIVE].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 3 },
  ],
  benefit: [
    { upgrade: 1 },
    { coin: 3 }
  ]
};
config.initial[PlayerMats.INNOVATIVE].actions[Actions.DEPLOY] = {
  cost: [
    { metal: 3, upgrades: 1 },
  ],
  benefit: [
    { deploy: 1 },
    { coin: 1 }
  ]
};
config.initial[PlayerMats.INNOVATIVE].actions[Actions.BUILD] = {
  cost: [
    { wood: 4, upgrades: 3 },
  ],
  benefit: [
    { build: 1 },
    { coin: 2 }
  ]
};
config.initial[PlayerMats.INNOVATIVE].actions[Actions.ENLIST] = {
  cost: [
    { food: 3, upgrades: 2 },
  ],
  benefit: [
    { enlist: 1 }
  ]
};

config.initial[PlayerMats.MECHANICAL] = { actions: {} };
config.initial[PlayerMats.MECHANICAL].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 3, upgrades: 1 },
  ],
  benefit: [
    { upgrade: 1 },
  ]
};
config.initial[PlayerMats.MECHANICAL].actions[Actions.DEPLOY] = {
  cost: [
    { metal: 3, upgrades: 2 },
  ],
  benefit: [
    { deploy: 1 },
    { coin: 2 }
  ]
};
config.initial[PlayerMats.MECHANICAL].actions[Actions.BUILD] = {
  cost: [
    { wood: 3, upgrades: 1 },
  ],
  benefit: [
    { build: 1 },
    { coin: 2 }
  ]
};
config.initial[PlayerMats.MECHANICAL].actions[Actions.ENLIST] = {
  cost: [
    { food: 4, upgrades: 2 },
  ],
  benefit: [
    { enlist: 1 },
    { coin: 2 }
  ]
};

config.initial[PlayerMats.AGRICULTURAL] = { actions: {} };
config.initial[PlayerMats.AGRICULTURAL].actions[Actions.UPGRADE] = {
  cost: [
    { oil: 2 },
  ],
  benefit: [
    { upgrade: 1 },
    { coin: 1 },
  ]
};
config.initial[PlayerMats.AGRICULTURAL].actions[Actions.DEPLOY] = {
  cost: [
    { metal: 4, upgrades: 2 },
  ],
  benefit: [
    { deploy: 1 },
  ]
};
config.initial[PlayerMats.AGRICULTURAL].actions[Actions.BUILD] = {
  cost: [
    { wood: 4, upgrades: 2 },
  ],
  benefit: [
    { build: 1 },
    { coin: 2 }
  ]
};
config.initial[PlayerMats.AGRICULTURAL].actions[Actions.ENLIST] = {
  cost: [
    { food: 3, upgrades: 2 },
  ],
  benefit: [
    { enlist: 1 },
    { coin: 3 }
  ]
};

export default config;
