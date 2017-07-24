import * as Factions from 'enums/factions';
import * as PlayerMats from 'enums/player_mats';

const config = {
  initialAmounts: {}
};

config.initialAmounts.faction = {};
config.initialAmounts.faction[Factions.NORDIC]  = { power: 4, combatCards: 1 };
config.initialAmounts.faction[Factions.RUSVIET] = { power: 3, combatCards: 2 };
config.initialAmounts.faction[Factions.TOGAWA]  = { power: 0, combatCards: 2 };
config.initialAmounts.faction[Factions.CRIMEA]  = { power: 5, combatCards: 0 };
config.initialAmounts.faction[Factions.SAXONY]  = { power: 1, combatCards: 4 };
config.initialAmounts.faction[Factions.POLANIA] = { power: 2, combatCards: 3 };
config.initialAmounts.faction[Factions.ALBION]  = { power: 3, combatCards: 0 };

config.initialAmounts.playerMat = {};
config.initialAmounts.playerMat[PlayerMats.INDUSTRIAL]   = { objectives: 2, popularity: 2, coins: 4 };
config.initialAmounts.playerMat[PlayerMats.ENGINEERING]  = { objectives: 2, popularity: 2, coins: 5 };
config.initialAmounts.playerMat[PlayerMats.MILITANT]     = { objectives: 2, popularity: 3, coins: 4 };
config.initialAmounts.playerMat[PlayerMats.PATRIOTIC]    = { objectives: 2, popularity: 2, coins: 6 };
config.initialAmounts.playerMat[PlayerMats.INNOVATIVE]   = { objectives: 2, popularity: 3, coins: 5 };
config.initialAmounts.playerMat[PlayerMats.MECHANICAL]   = { objectives: 2, popularity: 3, coins: 6 };
config.initialAmounts.playerMat[PlayerMats.AGRICULTURAL] = { objectives: 2, popularity: 4, coins: 7 };

export default config;
