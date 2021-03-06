import scythe from 'scythe';
import Renderer from 'renderers/renderer';
import * as Resources from 'enums/resources';

export default class ResourceRenderer extends Renderer {

  constructor(model, state) {
    super(model, state);
    this.resource = this.addSprite(state, image(state.type));
  }

}

function image(resource) {
  return ['resource', imageSuffix(resource)].join('-');
}

function imageSuffix(resource) {
  switch(resource) {
    case Resources.METAL: return 'metal';
    case Resources.OIL:   return 'oil';
    case Resources.FOOD:  return 'food';
    case Resources.WOOD:  return 'wood';
  }
}
