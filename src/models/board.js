import Model from 'models/model';
import BoardRenderer from 'renderers/board';
import Territory from 'models/territory';
import boardConfig from 'config/board';

export default class Board extends Model {
  
  constructor() {
    super({ renderer: BoardRenderer });
    this.territories = [];
    for (let i = 0; i < boardConfig.data.length; i++) {
      const row = boardConfig.data[i];
      for (let j = 0; j < row.length; j++) {
        let territory = new Territory(row[j]);
        this.territories.push(territory);
      }
    }
  }

}
