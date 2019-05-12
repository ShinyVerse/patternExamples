const BuildABear = require('./BuildABear');
const TiredBuildABear = require('./TiredBuildABear');
const bearOptions = {
  name: 'Burt',
  hasLasers: true,
  isFluffy: true
}

const argumentalBear = new TiredBuildABear(bearOptions);
console.log('argumentalBear:::::');
console.log(argumentalBear);

const builtBear = (new BuildABear()).addName('Albert').addCuteness().addFlightAbility();

console.log('builtBear:::::::');
console.log(builtBear);

builtBear.addLasers();
console.log('builtBear after addition of lasers:::::::');
console.log(builtBear);
