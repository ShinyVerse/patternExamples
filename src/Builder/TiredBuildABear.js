class TiredBuildABear {
  constructor(toy) {
    this.name = toy.name || 'unknown';
    this.hasLasers = toy.hasLasers || false;
    this.isCute = toy.isCute || false;
    this.flies = toy.flies || false;
    this.hasVoice = toy.hasVoice || false;
    this.isFluffy = toy.isFluffy || false;
  }
}
module.exports = TiredBuildABear;

// A generic toy could have endless parameters to add description or behaviour,
// you could easily break this down into separate classes and use the strategy pattern
// to add behaviours across multiple. Or, you could build on what you have, when you want it there.
// Head to ToyMaker.js for the builder pattern solution to this potentially messy approach.
