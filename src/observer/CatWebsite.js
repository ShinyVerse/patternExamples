class CatWebsite {
  constructor() {
    this.catFans = [];
    this.catFaces = ['(^._.^)ﾉ', "/ᐠ｡‸｡ᐟ\\ z",'(=ㅇᆽㅇ=)', '/ᐠ. ᴗ.ᐟ\\ ', '=^._.^='];
  }

  joinCuteness(catFan){
    this.catFans.push(catFan);
    console.log(` (=^ ◡ ^=) !Welcome to the kitty club ${catFan.name}! (=^ ◡ ^=)`)
  }

  leaveCuteness(catFan){
    let index = this.catFans.indexOf(catFan);
    if (index !== -1) this.catFans.splice(index, 1);
    console.log(`/ᐠ-ꞈ-ᐟ\\ fine, leave ${catFan.name}...`)
  }

  updateOnKitty(kittyAction) {
    this.catFans.forEach(fan => {
      let randomCatFace = this.catFaces[Math.floor(Math.random() * this.catFaces.length)]
      let msg = `OMG, ${fan.name} kitty just ${kittyAction}!!!! ${randomCatFace}`
      fan.notify(msg);
    })
  }
}

module.exports = new CatWebsite();
