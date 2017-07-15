import Renderer from 'renderers/renderer';
import scythe from 'scythe';
import * as Territories from 'enums/territories';
import * as Factions from 'enums/factions';

export default class TerritoryRenderer extends Renderer {

  constructor(state) {
    super();
    this.sprite = scythe.game.add.sprite(state.x, state.y, "territory");
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
  }

  addFactoryDetail(state) {

  }

  addBaseDetail(state) {
    var style = {
      font: "32px Arial",
      fill: "#ff0044",
      wordWrap: true,
      wordWrapWidth: state.width,
      align: "center",
      backgroundColor: "#ffff00"
    };
    this.text = scythe.game.add.text(0, 0, this.factionText(), style);
    console.log("addBaseDetail");
  }

  addFarmDetail(state) {

  }

  addForestDetail(state) {

  }

  addTundraDetail(state) {

  }

  addMountainDetail(state) {

  }

  addVillageDetail(state) {

  }

  addLakeDetail(state) {

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
