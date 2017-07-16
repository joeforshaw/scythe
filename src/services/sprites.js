import sprites from 'config/sprites';

export default class Sprites {

  constructor(game) {
    const baseUrl = '/assets/images/';
    for (let key in sprites) {
      const url = baseUrl + sprites[key];
      console.log('Loading asset: ' + url);
      game.load.image(key, url); 
    }
  }

}
