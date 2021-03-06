import * as Territories from 'enums/territories';

const colors = {
  territories: [],
  selectable: 0x3bd343,
  selected: 0x9ffca3,
  playerMat: {
    background: 0x961909,
    actionGroup: 0xfff4d3,
    action: 0xe0d4ac,
    title: '#eaeaea',
    actionText: '#3d3d3d'
  }
};
colors.territories[Territories.FACTORY]  = 0x52246b;
colors.territories[Territories.BASE]     = 0x032807;
colors.territories[Territories.FARM]     = 0xffdd66;
colors.territories[Territories.FOREST]   = 0x56431a;
colors.territories[Territories.TUNDRA]   = 0x10152d;
colors.territories[Territories.MOUNTAIN] = 0x424242;
colors.territories[Territories.VILLAGE]  = 0xfce3c2;
colors.territories[Territories.LAKE]     = 0x1e46aa;
colors.territories[Territories.DEFAULT]  = 0x0e6814;

export default colors;