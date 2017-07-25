import * as Actions from 'enums/actions';
import * as PlayerMats from 'enums/player_mats';

const topRowGroupMatrix = [];
topRowGroupMatrix[Actions.MOVE] = [];
topRowGroupMatrix[Actions.MOVE][PlayerMats.INDUSTRIAL] = 2;
topRowGroupMatrix[Actions.MOVE][PlayerMats.ENGINEERING] = 3;
topRowGroupMatrix[Actions.MOVE][PlayerMats.MILITANT] = 1;
topRowGroupMatrix[Actions.MOVE][PlayerMats.PATRIOTIC] = 1;
topRowGroupMatrix[Actions.MOVE][PlayerMats.INNOVATIVE] = 3;
topRowGroupMatrix[Actions.MOVE][PlayerMats.MECHANICAL] = 2;
topRowGroupMatrix[Actions.MOVE][PlayerMats.AGRICULTURAL] = 0;
topRowGroupMatrix[Actions.TRADE] = [];
topRowGroupMatrix[Actions.TRADE][PlayerMats.INDUSTRIAL] = 3;
topRowGroupMatrix[Actions.TRADE][PlayerMats.ENGINEERING] = 1;
topRowGroupMatrix[Actions.TRADE][PlayerMats.MILITANT] = 3;
topRowGroupMatrix[Actions.TRADE][PlayerMats.PATRIOTIC] = 2;
topRowGroupMatrix[Actions.TRADE][PlayerMats.INNOVATIVE] = 0;
topRowGroupMatrix[Actions.TRADE][PlayerMats.MECHANICAL] = 0;
topRowGroupMatrix[Actions.TRADE][PlayerMats.AGRICULTURAL] = 1;
topRowGroupMatrix[Actions.PRODUCE] = [];
topRowGroupMatrix[Actions.PRODUCE][PlayerMats.INDUSTRIAL] = 1;
topRowGroupMatrix[Actions.PRODUCE][PlayerMats.ENGINEERING] = 0;
topRowGroupMatrix[Actions.PRODUCE][PlayerMats.MILITANT] = 2;
topRowGroupMatrix[Actions.PRODUCE][PlayerMats.PATRIOTIC] = 3;
topRowGroupMatrix[Actions.PRODUCE][PlayerMats.INNOVATIVE] = 1;
topRowGroupMatrix[Actions.PRODUCE][PlayerMats.MECHANICAL] = 3;
topRowGroupMatrix[Actions.PRODUCE][PlayerMats.AGRICULTURAL] = 2;
topRowGroupMatrix[Actions.BOLSTER] = [];
topRowGroupMatrix[Actions.BOLSTER][PlayerMats.INDUSTRIAL] = 0;
topRowGroupMatrix[Actions.BOLSTER][PlayerMats.ENGINEERING] = 2;
topRowGroupMatrix[Actions.BOLSTER][PlayerMats.MILITANT] = 0;
topRowGroupMatrix[Actions.BOLSTER][PlayerMats.PATRIOTIC] = 1;
topRowGroupMatrix[Actions.BOLSTER][PlayerMats.INNOVATIVE] = 2;
topRowGroupMatrix[Actions.BOLSTER][PlayerMats.MECHANICAL] = 1;
topRowGroupMatrix[Actions.BOLSTER][PlayerMats.AGRICULTURAL] = 3;

const bottomRowGroupMatrix = [];
bottomRowGroupMatrix[Actions.UPGRADE] = 0;
bottomRowGroupMatrix[Actions.DEPLOY] = 1;
bottomRowGroupMatrix[Actions.BUILD] = 2;
bottomRowGroupMatrix[Actions.ENLIST] = 3;

const config = {
  width: 0.47,
  height: 0.3,
  padding: 0.02,
  initial: {}
};

// Top row actions
for (let i = 0; i < PlayerMats.all; i++) {
  config.initial[PlayerMats.all[i]].actions[Actions.MOVE] = {
    topRow: true,
    group: topRowGroupMatrix[Actions.MOVE][PlayerMats.all[i]],
    cost: [],
    benefit: [
      [ { move: 2, upgrades: 1 } ],
      [ { coin: 1 } ],
    ]
  };
  config.initial[PlayerMats.all[i]].actions[Actions.TRADE] = {
    topRow: true,
    group: topRowGroupMatrix[Actions.TRADE][PlayerMats.all[i]],
    cost: [
      { coin: 1 }
    ],
    benefit: [
      { resource: 2 },
      { popularity: 1, upgrades: 1 }
    ]
  };
  config.initial[PlayerMats.all[i]].actions[Actions.PRODUCE] = {
    topRow: true,
    group: topRowGroupMatrix[Actions.PRODUCE][PlayerMats.all[i]],
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
    topRow: true,
    group: topRowGroupMatrix[Actions.BOLSTER][PlayerMats.all[i]],
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
  group: bottomRowGroupMatrix[Actions.UPGRADE],
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
  group: bottomRowGroupMatrix[Actions.DEPLOY],
  cost: [
    { metal: 3, upgrades: 2 },
  ],
  benefit: [
    { deploy: 1 },
    { coin: 2 }
  ]
};
config.initial[PlayerMats.INDUSTRIAL].actions[Actions.BUILD] = {
  group: bottomRowGroupMatrix[Actions.BUILD],
  cost: [
    { wood: 3, upgrades: 1 },
  ],
  benefit: [
    { build: 1 },
    { coin: 1 }
  ]
};
config.initial[PlayerMats.INDUSTRIAL].actions[Actions.ENLIST] = {
  group: bottomRowGroupMatrix[Actions.ENLIST],
  cost: [
    { food: 4, upgrades: 2 },
  ],
  benefit: [
    { enlist: 1 }
  ]
};

config.initial[PlayerMats.ENGINEERING] = { actions: {} };
config.initial[PlayerMats.ENGINEERING].actions[Actions.UPGRADE] = {
  group: bottomRowGroupMatrix[Actions.UPGRADE],
  cost: [
    { oil: 3, upgrades: 1 },
  ],
  benefit: [
    { upgrade: 1 },
    { coin: 2 },
  ]
};
config.initial[PlayerMats.ENGINEERING].actions[Actions.DEPLOY] = {
  group: bottomRowGroupMatrix[Actions.DEPLOY],
  cost: [
    { metal: 4, upgrades: 2 },
  ],
  benefit: [
    { deploy: 1 },
  ]
};
config.initial[PlayerMats.ENGINEERING].actions[Actions.BUILD] = {
  group: bottomRowGroupMatrix[Actions.BUILD],
  cost: [
    { wood: 3, upgrades: 2 },
  ],
  benefit: [
    { build: 1 },
    { coin: 3 }
  ]
};
config.initial[PlayerMats.ENGINEERING].actions[Actions.ENLIST] = {
  group: bottomRowGroupMatrix[Actions.ENLIST],
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
  group: bottomRowGroupMatrix[Actions.UPGRADE],
  cost: [
    { oil: 3, upgrades: 2 },
  ],
  benefit: [
    { upgrade: 1 },
  ]
};
config.initial[PlayerMats.MILITANT].actions[Actions.DEPLOY] = {
  group: bottomRowGroupMatrix[Actions.DEPLOY],
  cost: [
    { metal: 3, upgrades: 1 },
  ],
  benefit: [
    { deploy: 1 },
    { coin: 3 }
  ]
};
config.initial[PlayerMats.MILITANT].actions[Actions.BUILD] = {
  group: bottomRowGroupMatrix[Actions.BUILD],
  cost: [
    { wood: 4, upgrades: 1 },
  ],
  benefit: [
    { build: 1 },
    { coin: 1 }
  ]
};
config.initial[PlayerMats.MILITANT].actions[Actions.ENLIST] = {
  group: bottomRowGroupMatrix[Actions.ENLIST],
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
  group: bottomRowGroupMatrix[Actions.UPGRADE],
  cost: [
    { oil: 2 },
  ],
  benefit: [
    { upgrade: 1 },
    { coin: 1 }
  ]
};
config.initial[PlayerMats.PATRIOTIC].actions[Actions.DEPLOY] = {
  group: bottomRowGroupMatrix[Actions.DEPLOY],
  cost: [
    { metal: 4, upgrades: 3 },
  ],
  benefit: [
    { deploy: 1 },
    { coin: 3 }
  ]
};
config.initial[PlayerMats.PATRIOTIC].actions[Actions.BUILD] = {
  group: bottomRowGroupMatrix[Actions.BUILD],
  cost: [
    { wood: 4, upgrades: 2 },
  ],
  benefit: [
    { build: 1 },
  ]
};
config.initial[PlayerMats.PATRIOTIC].actions[Actions.ENLIST] = {
  group: bottomRowGroupMatrix[Actions.ENLIST],
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
  group: bottomRowGroupMatrix[Actions.UPGRADE],
  cost: [
    { oil: 3 },
  ],
  benefit: [
    { upgrade: 1 },
    { coin: 3 }
  ]
};
config.initial[PlayerMats.INNOVATIVE].actions[Actions.DEPLOY] = {
  group: bottomRowGroupMatrix[Actions.DEPLOY],
  cost: [
    { metal: 3, upgrades: 1 },
  ],
  benefit: [
    { deploy: 1 },
    { coin: 1 }
  ]
};
config.initial[PlayerMats.INNOVATIVE].actions[Actions.BUILD] = {
  group: bottomRowGroupMatrix[Actions.BUILD],
  cost: [
    { wood: 4, upgrades: 3 },
  ],
  benefit: [
    { build: 1 },
    { coin: 2 }
  ]
};
config.initial[PlayerMats.INNOVATIVE].actions[Actions.ENLIST] = {
  group: bottomRowGroupMatrix[Actions.ENLIST],
  cost: [
    { food: 3, upgrades: 2 },
  ],
  benefit: [
    { enlist: 1 }
  ]
};

config.initial[PlayerMats.MECHANICAL] = { actions: {} };
config.initial[PlayerMats.MECHANICAL].actions[Actions.UPGRADE] = {
  group: bottomRowGroupMatrix[Actions.UPGRADE],
  cost: [
    { oil: 3, upgrades: 1 },
  ],
  benefit: [
    { upgrade: 1 },
  ]
};
config.initial[PlayerMats.MECHANICAL].actions[Actions.DEPLOY] = {
  group: bottomRowGroupMatrix[Actions.DEPLOY],
  cost: [
    { metal: 3, upgrades: 2 },
  ],
  benefit: [
    { deploy: 1 },
    { coin: 2 }
  ]
};
config.initial[PlayerMats.MECHANICAL].actions[Actions.BUILD] = {
  group: bottomRowGroupMatrix[Actions.BUILD],
  cost: [
    { wood: 3, upgrades: 1 },
  ],
  benefit: [
    { build: 1 },
    { coin: 2 }
  ]
};
config.initial[PlayerMats.MECHANICAL].actions[Actions.ENLIST] = {
  group: bottomRowGroupMatrix[Actions.ENLIST],
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
  group: bottomRowGroupMatrix[Actions.UPGRADE],
  cost: [
    { oil: 2 },
  ],
  benefit: [
    { upgrade: 1 },
    { coin: 1 },
  ]
};
config.initial[PlayerMats.AGRICULTURAL].actions[Actions.DEPLOY] = {
  group: bottomRowGroupMatrix[Actions.DEPLOY],
  cost: [
    { metal: 4, upgrades: 2 },
  ],
  benefit: [
    { deploy: 1 },
  ]
};
config.initial[PlayerMats.AGRICULTURAL].actions[Actions.BUILD] = {
  group: bottomRowGroupMatrix[Actions.BUILD],
  cost: [
    { wood: 4, upgrades: 2 },
  ],
  benefit: [
    { build: 1 },
    { coin: 2 }
  ]
};
config.initial[PlayerMats.AGRICULTURAL].actions[Actions.ENLIST] = {
  group: bottomRowGroupMatrix[Actions.ENLIST],
  cost: [
    { food: 3, upgrades: 2 },
  ],
  benefit: [
    { enlist: 1 },
    { coin: 3 }
  ]
};

export default config;
