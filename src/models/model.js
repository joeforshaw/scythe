export default class Model {

  constructor(params) {
    this.renderer = new params.renderer();
    this.state = {}
    this.setState(params.state ? params.state : {});
  }

  render() {
    this.renderer.render();
  }

  setState(state) {
    Object.assign(this.state, state);
  }

  getState() {
    return Object.assign({}, this.state); 
  }

}
