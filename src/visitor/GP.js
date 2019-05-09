const { Surgeon, Psychiatrist, Nurse } = require('./SpecialistDoctors');

const GP = {
  visit: (sickPerson) => {
    console.log('Mentally, in my professional opinion, you are ' + sickPerson.mentalHealth );
    console.log('Generally, in my professional opinion, you are ' + sickPerson.generalHealth );
    console.log('Physically, in my professional opinion, you are ' + sickPerson.physicalHealth  + '\n');
    if (sickPerson != 'HEALTHY'){
      GP.sendOffPatient(sickPerson);
    }
  },
  sendOffPatient: (sickPerson) => {
    Surgeon.visit(sickPerson);
    Psychiatrist.visit(sickPerson)
    Nurse.visit(sickPerson)
  }
}

module.exports = GP;
