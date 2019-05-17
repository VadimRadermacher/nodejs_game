const uuidv4 = require('uuid/v4');
const _ = require('lodash');

module.exports = class Game {
  constructor() {
    this.id = uuidv4();
    this.players = [null, null, null, null];
    this.reset();
  }
}