const SoftPawsSite = require('./CatWebsite');
const CatFan = require('./CatFan');
const kittyAction = cuteThing => cuteThing;

let randomPeople = ['Bob', 'Harry', 'Madison', 'Cinthya'];

let forcedCatFans = randomPeople.map(person => {
  let catFan = new CatFan(person)
  SoftPawsSite.joinCuteness(catFan)
  return catFan;
})

console.log('TIME FOR SOME KITTY SHENANIGANS!!!!!\n')

SoftPawsSite.updateOnKitty(kittyAction("licked it's paw"));
SoftPawsSite.updateOnKitty(kittyAction("ate a spider"));


console.log(`\nbut of course, not everyone wanted to be forced into the kitty cat club,
so naturally they must be allowed to leave.\n
We're not a cult after all... (=ㅇᆽ ㅇ=)\n`);

console.log(`${forcedCatFans[0].name}: Hey! I don't give a hoot what these cats are up to! I want to leave!\n`);

console.log('(ↀ ᆺ  ↀ ) (ↀ ᆺ  ↀ ) (ↀ ᆺ  ↀ ) OKAY (ↀ ᆺ  ↀ ) (ↀ ᆺ  ↀ ) (ↀ ᆺ  ↀ )\n');

SoftPawsSite.leaveCuteness(forcedCatFans[0]);

SoftPawsSite.updateOnKitty(kittyAction("SACRIFICED YOUR BABY"));
