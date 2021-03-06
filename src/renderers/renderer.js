import scythe from 'scythe';

export default class Renderer {

  addSprite(state, image) {
    if (!this.group) { this.group = scythe.game.add.group(); }
    const sprite = scythe.game.add.sprite(state.x, state.y, image);
    this.group.add(sprite);
    return sprite;
  }

  frame(state) {
    return { x: state.x, y: state.y, width: state.width, height: state.height }
  }

  positionForCommonCentre(sprite, spriteToMove) {
    return {
      x: sprite.x + ((spriteToMove.width  - sprite.width) / 2),
      y: sprite.y + ((spriteToMove.height - sprite.height) / 2)
    }
  }

  setPosition(sprite, coordinate) {
    sprite.x = coordinate.x;
    sprite.y = coordinate.y;
  }
  
}
