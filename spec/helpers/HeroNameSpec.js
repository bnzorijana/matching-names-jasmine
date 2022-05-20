describe("Nom correspondant au hero: ", function () {
  let HeroName = require('../../HeroName')
  let name;
  beforeEach(function(){
    name = new HeroName();
  });
  it("Spiderman et Superman par rapport au mot-clé hero", function () {
    // test
    let compatibility = name.count("Spiderman", "Superman", "hero")
    expect(compatibility.first_name_compatibility).toBeLessThan(100)
    expect(compatibility.second_name_compatibility).toBe(20)
  })
  it("Philipp Martins et Terrence Doe par rapport au mot-clé class", function () {
    // test
    const compatibility = name.count("Phillip Martins", "Terrence Doe", "class")
    expect(compatibility.first_name_compatibility).toEqual(41)
    expect(compatibility.second_name_compatibility).toEqual(10)
  })
  it("S'attendre à un score inférieure à 10 de Philipp Martins et Terrence Doe par rapport au mot-clé class", function () {
    // test
    const compatibility = name.countFalse("Phillip Martins", "Terrence Doe", "class")
    expect(compatibility.first_name_compatibility).toBeLessThan(10)
    expect(compatibility.second_name_compatibility).toBeLessThan(10)
  })

})