class Scythe {

  constructor() {
    console.log('constructor1')
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
      preload: this.preload,
      create: this.create,
      update: this.update
    });
  }

  preload() {
    
  }

  create() {

  }

  update() {

  }

}

var scythe = new Scythe();