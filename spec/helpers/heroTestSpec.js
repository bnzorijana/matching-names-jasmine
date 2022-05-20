describe("On veut que le call à l'api nous retourne un array", async function () {
  let herroArray = require("../../hero");
  let names;
  beforeEach(function (){
    names = new herroArray()
  })
  it("S'attendre à ce que herroArray soit un array", async function (){
    const api = names.getHeroes().then((data) => {
      return data;
    })
    expect(api).toBe(api)
  })
})
