import * as Factions from 'enums/factions';
import * as PlayerMats from 'enums/player_mats';

const config = {
  initial: {}
};

config.initial.faction = {};
config.initial.faction[Factions.NORDIC]  = { power: 4, combatCards: 1 };
config.initial.faction[Factions.RUSVIET] = { power: 3, combatCards: 2 };
config.initial.faction[Factions.TOGAWA]  = { power: 0, combatCards: 2 };
config.initial.faction[Factions.CRIMEA]  = { power: 5, combatCards: 0 };
config.initial.faction[Factions.SAXONY]  = { power: 1, combatCards: 4 };
config.initial.faction[Factions.POLANIA] = { power: 2, combatCards: 3 };
config.initial.faction[Factions.ALBION]  = { power: 3, combatCards: 0 };

config.initial.playerMat = {};
config.initial.playerMat[PlayerMats.INDUSTRIAL]   = { objectives: 2, popularity: 2, coins: 4 };
config.initial.playerMat[PlayerMats.ENGINEERING]  = { objectives: 2, popularity: 2, coins: 5 };
config.initial.playerMat[PlayerMats.MILITANT]     = { objectives: 2, popularity: 3, coins: 4 };
config.initial.playerMat[PlayerMats.PATRIOTIC]    = { objectives: 2, popularity: 2, coins: 6 };
config.initial.playerMat[PlayerMats.INNOVATIVE]   = { objectives: 2, popularity: 3, coins: 5 };
config.initial.playerMat[PlayerMats.MECHANICAL]   = { objectives: 2, popularity: 3, coins: 6 };
config.initial.playerMat[PlayerMats.AGRICULTURAL] = { objectives: 2, popularity: 4, coins: 7 };

export default config;
