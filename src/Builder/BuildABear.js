class BuildABear {
  addName(name) {
    this.name = name;
    return this;
  }
  addLasers() {
    this.lasers = true;
    return this;
  }

  addCuteness() {
    this.cuteness = 'cute af';
    return this;
  }

  addFlightAbility() {
    this.flies = true;
    return this;
  }

  addVoice() {
    this.voice = 'Hello, friend.'
    return this;
  }

  addFluff() {
    this.fluff = true;
    return this;
  }
}

module.exports = BuildABear;
