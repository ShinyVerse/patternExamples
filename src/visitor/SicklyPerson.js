const SicklyPerson = {
  state: 'ILL',
  mentalHealth: "Crazy, a case of lemon phobia has hit you hard",
  generalHealth: "Sick, with Gremlin Flu, you are at a high risk after midnight.",
  physicalHealth: "Not too great, suffers a broken glutius maximus...lol",

  accept: (visitor) => {
    visitor.visit(this);
  }
}

module.exports = SicklyPerson;
