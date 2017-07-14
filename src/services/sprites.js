import sprites from 'config/sprites';

export default class Sprites {

  constructor(game) {
    for (let key in sprites) {
      game.load.image(key, sprites[key]); 
    }
  }

}
