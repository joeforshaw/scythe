import scythe from 'scythe';
import Renderer from 'renderers/renderer';
import * as Resources from 'enums/resources';

export default class ResourceRenderer extends Renderer {

  constructor(model, state) {
    super(model, state);
    initializeResourceSprite();
  }

}

function spriteSuffix(resource) {
  switch(resources) {
    case Resources.METAL: return 'metal';
    case Resources.OIL:   return 'oil';
    case Resources.FOOD:  return 'food';
    case Resources.WOOD:  return 'wood';
  }
}
