import scythe from 'scythe';

export default class Renderer {

  addSprite(state, image) {
    if (!this.sprites) { this.sprites = scythe.game.add.group(); }
    const sprite = scythe.game.add.sprite(state.x, state.y, image);
    this.sprites.add(sprite);
    return sprite;
  }
  
}
