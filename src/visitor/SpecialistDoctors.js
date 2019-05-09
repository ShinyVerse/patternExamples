const Psychiatrist = {
  visit: (sickPerson) => {
    sickPerson.mentalHealth = 'mentally stable'
  }
}

const Surgeon = {
  visit: (sickPerson) => {
    sickPerson.physicalHealth = 'fighting fit'
  }
}

const Nurse = {
  visit: (sickPerson) => {
    sickPerson.generalHealth = 'healthy '
  }
}

module.exports = {
  Surgeon,
  Psychiatrist,
  Nurse
}
