import { getHeroes } from "../../hero.js";
describe("On veut que tester le call à l'api nous retourne bien une reponse", function () {
  it("S'attendre à ce que la longueur des datas soient supérieurs à 0", function (){
    let names = []
    return  getHeroes().then((data) => {
      expect(data.length).toBeGreaterThan(0);
      data.forEach((hero) => {
        names.push(hero.name)
        expect(names).toContain(
            "A-Bomb"
        );
      })
    });
  })
})
