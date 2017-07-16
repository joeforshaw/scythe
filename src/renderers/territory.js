import Renderer from 'renderers/renderer';
import scythe from 'scythe';
import * as Territories from 'enums/territories';
import * as Factions from 'enums/factions';
import colors from 'config/colors';

export default class TerritoryRenderer extends Renderer {

  constructor(state) {
    super();
    this.background = scythe.game.add.sprite(state.x, state.y, "territory");
    this.handleTerritoryType(state);
  }

  render(state) {
    
  }

  handleTerritoryType(state) {
    switch (state.type) {
      case Territories.FACTORY:  this.addFactoryDetail(state);  break;
      case Territories.BASE:     this.addBaseDetail(state);     break;
      case Territories.FARM:     this.addFarmDetail(state);     break;
      case Territories.FOREST:   this.addForestDetail(state);   break;
      case Territories.TUNDRA:   this.addTundraDetail(state);   break;
      case Territories.MOUNTAIN: this.addMountainDetail(state); break;
      case Territories.VILLAGE:  this.addVillageDetail(state);  break;
      case Territories.LAKE:     this.addLakeDetail(state);     break;
    }
    if (state.encounter) { this.addEncounterDetail(state); }
    if (state.tunnel)    { this.addTunnelDetail(state); }
  }

  addFactoryDetail(state) {
    this.background.tint = colors.territories[Territories.DEFAULT];
    this.top = this.addSprite(state, 'factory');
  }

  addBaseDetail(state) {
    this.background.tint = colors.territories[Territories.BASE];
    this.base = this.addSprite(state, this.factionImage(state.faction));
  }

  addFarmDetail(state) {
    this.background.tint = colors.territories[Territories.DEFAULT];
    this.top = this.addSprite(state, 'farm');
  }

  addForestDetail(state) {
    this.background.tint = colors.territories[Territories.DEFAULT];
    this.top = this.addSprite(state, 'forest');
  }

  addTundraDetail(state) {
    this.background.tint = colors.territories[Territories.DEFAULT];
    this.top = this.addSprite(state, 'tundra');
  }

  addMountainDetail(state) {
    this.background.tint = colors.territories[Territories.DEFAULT];
    this.top = this.addSprite(state, 'mountain');
  }

  addVillageDetail(state) {
    this.background.tint = colors.territories[Territories.DEFAULT];
    this.top = this.addSprite(state, 'village');
  }

  addLakeDetail(state) {
    this.background.tint = colors.territories[Territories.LAKE];
    this.top = this.addSprite(state, 'lake');
  }

  addEncounterDetail(state) {
    this.bottom = this.addSprite(state, 'encounter');
  }

  addTunnelDetail(state) {
    this.bottom = this.addSprite(state, 'tunnel');
  }

  addSprite(state, image) {
    return scythe.game.add.sprite(state.x, state.y, image);
  }

  factionImage(faction) {
    switch (faction) {
      case Factions.NORDIC:  return 'nordic';
      case Factions.RUSVIET: return 'rusviet';
      case Factions.TOGAWA:  return 'togawa';
      case Factions.CRIMEA:  return 'crimea';
      case Factions.SAXONY:  return 'saxony';
      case Factions.POLANIA: return 'polania';
      case Factions.ALBION:  return 'albion';
      default:               return '';
    }
  }

  factionText(faction) {
    switch (faction) {
      case Factions.NORDIC:  return 'N';
      case Factions.RUSVIET: return 'R';
      case Factions.TOGAWA:  return 'T';
      case Factions.CRIMEA:  return 'C';
      case Factions.SAXONY:  return 'S';
      case Factions.POLANIA: return 'P';
      case Factions.ALBION:  return 'A';    
    }
  }

}
