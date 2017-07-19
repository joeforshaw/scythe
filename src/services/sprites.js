import scythe from 'scythe';
import sprites from 'config/sprites';

export default class Sprites {

  constructor(game) {
    this.baseUrl = '/assets/images/';
    this.recursiveLoad(sprites, []);
  }

  recursiveLoad(spriteList, parentKeys) {
    for (let key in spriteList) {
      const keys = parentKeys.slice(0);
      keys.push(key);
      if (typeof spriteList[key] === 'object') {
        this.recursiveLoad(spriteList[key], keys);
      } else {
        const url = this.baseUrl + spriteList[key];
        const assetKey = keys.join('-');
        console.debug('Loading asset ' + assetKey + ': ' + url);
        scythe.game.load.image(assetKey, url); 
      }
    }
  }

}
