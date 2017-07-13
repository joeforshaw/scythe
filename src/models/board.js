import config from 'config/board';

export default class Board {
  constructor() {
    console.log(config.columns, config.rows);
    
    console.log('stuff');
    // var grid = [];
    // for (var i = 0; i < config.gridWidth; i++){
    //   grid[i] = [];
    //   for (var j = 0; j < config.gridHeight; j++){
    //     grid[i].push(new Hexagon(createHexImage(i,j), i, j));
    //     layer.add(grid[i][j].getImage());
    //   }
    // }
    // return grid;
  }
}