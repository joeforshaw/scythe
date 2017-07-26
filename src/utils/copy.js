import * as Factions from 'enums/factions';
import * as Actions from 'enums/actions';
import * as PlayerMats from 'enums/player_mats';
import * as Units from 'enums/units';

export default class Copy {

  static forFaction(faction) {
    switch(faction) {
      case Factions.NORDIC:  return 'Nordic';
      case Factions.RUSVIET: return 'Rusviet';
      case Factions.TOGAWA:  return 'Togawa';
      case Factions.CRIMEA:  return 'Crimea';
      case Factions.SAXONY:  return 'Saxony';
      case Factions.POLANIA: return 'Polania';
      case Factions.ALBION:  return 'Albion';
    }
  }

  static forAction(action) {
    switch(action) {
      case Actions.MOVE:    return 'Move';
      case Actions.TRADE:   return 'Trade';
      case Actions.PRODUCE: return 'Produce';
      case Actions.BOLSTER: return 'Bolster';
      case Actions.UPGRADE: return 'Upgrade';
      case Actions.DEPLOY:  return 'Deploy';
      case Actions.BUILD:   return 'Build';
      case Actions.ENLIST:  return 'Enlist';
    }
  }

  static forPlayerMat(playerMat) {
    switch(playerMat) {
      case PlayerMats.INDUSTRIAL:   return 'Industrial';
      case PlayerMats.ENGINEERING:  return 'Engineering';
      case PlayerMats.MILITANT:     return 'Militant';
      case PlayerMats.PATRIOTIC:    return 'Patriotic';
      case PlayerMats.INNOVATIVE:   return 'Innovative';
      case PlayerMats.MECHANICAL:   return 'Mechanical';
      case PlayerMats.AGRICULTURAL: return 'Agricultural';
    }
  }

  static forUnit(unit) {
    switch(playerMat) {
      case Units.CHARACTER: return 'Character';
      case Units.MECH:      return 'Mech';
      case Units.WORKER:    return 'Worker';
    }
  }

}