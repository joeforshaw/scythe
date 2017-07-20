import scythe from 'scythe';

export default class Renderer {

  addSprite(state, image) {
    if (!this.sprites) { this.sprites = scythe.game.add.group(); }
    const sprite = scythe.game.add.sprite(state.x, state.y, image);
    this.sprites.add(sprite);
    return sprite;
  }

  frame(state) {
    return { x: state.x, y: state.y, width: state.width, height: state.height }
  }

  centerPositionTo(sprite, otherSprite) {
    return {
      x: sprite.x + ((otherSprite.width  - sprite.width) / 2),
      y: sprite.y + ((otherSprite.height - sprite.height) / 2)
    }
  }

  setPosition(sprite, coordinate) {
    sprite.x = coordinate.x;
    sprite.y = coordinate.y;
  }
  
}
