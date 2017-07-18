import Model from 'models/model';
import BoardRenderer from 'renderers/board';
import Territory from 'models/territory';
import config from 'config/board';
import { createBoard } from 'store/actions';

export default class Board extends Model {
  
  constructor(state) {
    super({ renderer: BoardRenderer, state: state });
    this.territories = [];
    for (let i = 0; i < config.data.length; i++) {
      const row = config.data[i];
      for (let j = 0; j < row.length; j++) {
        let item = row[j];
        const frame = this.calculateFrame(
          item.column,
          item.row,
          config.territory.width,
          config.territory.height
        );
        const territory = new Territory(Object.assign(item, frame));
        this.territories.push(territory);
      }
    }
    this.onCreated(createBoard);
  }

  calculateFrame(column, row, width, height) {
    return {
      x: (row % 2 === 0 ? width / 2 : 0) + (column * width),
      y: (height - (height / (2 * Math.tan(Math.PI/3)))) * row,
      width: width,
      height: height
    };
  }

}
