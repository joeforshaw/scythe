import * as Factions from 'enums/factions';
import * as FactionTypes from 'enums/faction_types';

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

config.initialAmounts.factionType = {};
config.initialAmounts.factionType[FactionTypes.INDUSTRIAL]   = { objectives: 2, popularity: 2, coins: 4 };
config.initialAmounts.factionType[FactionTypes.ENGINEERING]  = { objectives: 2, popularity: 2, coins: 5 };
config.initialAmounts.factionType[FactionTypes.MILITANT]     = { objectives: 2, popularity: 3, coins: 4 };
config.initialAmounts.factionType[FactionTypes.PATRIOTIC]    = { objectives: 2, popularity: 2, coins: 6 };
config.initialAmounts.factionType[FactionTypes.INNOVATIVE]   = { objectives: 2, popularity: 3, coins: 5 };
config.initialAmounts.factionType[FactionTypes.MECHANICAL]   = { objectives: 2, popularity: 3, coins: 6 };
config.initialAmounts.factionType[FactionTypes.AGRICULTURAL] = { objectives: 2, popularity: 4, coins: 7 };

export default config;
