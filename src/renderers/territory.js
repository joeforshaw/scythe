import Renderer from 'renderers/renderer';
import scythe from 'scythe';
import * as Territories from 'enums/territories';
import * as TerritorySides from 'enums/territory_sides';
import * as Factions from 'enums/factions';
import colors from 'config/colors';
import sprites from 'config/sprites';

export default class TerritoryRenderer extends Renderer {

  constructor(model, state) {
    super(model, state);
    this.riverSprites = [
      'river-top-right',
      'river-right',
      'river-bottom-right',
      'river-bottom-left',
      'river-left',
      'river-top-left'
    ];
    this.handleBackground(model, state);
    this.handleRivers(state);
    this.handleTerritoryType(state);
    this.originalTint = this.background.tint;
  }

  update(model) {
    const state = model.state.get();
    if (state.movable) {
      this.background.tint = colors.movable;
    } else {
      this.background.tint = this.originalTint;
    }
  }

  handleBackground(model, state) {
    this.background = this.addSprite(state, "territory");
    this.background.inputEnabled = true;
    this.background.events.onInputDown.add(function(sprite) {
      model.onClicked();
    }, this);
    if (state.type === Territories.BASE) {
      this.background.tint = colors.territories[Territories.BASE];
    } else if (state.type === Territories.LAKE) {
      this.background.tint = colors.territories[Territories.LAKE];
    } else {
      this.background.tint = colors.territories[Territories.DEFAULT];
    }
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

  handleRivers(state) {
    if (!state.rivers) { return; }
    this.rivers = [];
    for (let side in TerritorySides.all) {
      if (state.rivers.indexOf(parseInt(side)) < 0) { continue; }
      this.rivers[side] = this.addSprite(state, this.riverSprites[side]);
    }
  }

  addFactoryDetail(state) {
    this.top = this.addSprite(state, 'factory');
  }

  addBaseDetail(state) {
    this.base = this.addSprite(state, this.factionImage(state.faction));
  }

  addFarmDetail(state) {
    this.top = this.addSprite(state, 'farm');
  }

  addForestDetail(state) {
    this.top = this.addSprite(state, 'forest');
  }

  addTundraDetail(state) {
    this.top = this.addSprite(state, 'tundra');
  }

  addMountainDetail(state) {
    this.top = this.addSprite(state, 'mountain');
  }

  addVillageDetail(state) {
    this.top = this.addSprite(state, 'village');
  }

  addLakeDetail(state) {
    this.top = this.addSprite(state, 'lake');
  }

  addEncounterDetail(state) {
    this.bottom = this.addSprite(state, 'encounter');
  }

  addTunnelDetail(state) {
    this.bottom = this.addSprite(state, 'tunnel');
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
