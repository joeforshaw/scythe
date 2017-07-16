import sprites from 'config/sprites';

export default class Sprites {

  constructor(game) {
    const baseUrl = '/assets/images/';
    for (let key in sprites) {
      game.load.image(key, baseUrl + sprites[key]); 
    }
  }

}
