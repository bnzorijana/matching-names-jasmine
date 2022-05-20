const count = (name, hero, keyword) => {
  let firstNameCompatibility;
  let secondNameCompatibility;
  let firstNameScore = [];
  let secondNameScore = [];
  for(let letter of keyword) {
   const names = name.split(letter).length - 1;
   const heroes = hero.split(letter).length - 1;
   firstNameScore.push(names);
   secondNameScore.push(heroes);
  }
  firstNameScore = firstNameScore.map(x => x.toString());
  secondNameScore = secondNameScore.map(x => x.toString());
  while(firstNameScore.length > 2)
    firstNameScore.splice(0, 2, Number(firstNameScore[0]) + Number(firstNameScore[1]))
  firstNameCompatibility = firstNameScore[0] + firstNameScore[1];
  while(secondNameScore.length > 2)
    secondNameScore.splice(0, 2, Number(secondNameScore[0]) + Number(secondNameScore[1]))
  secondNameCompatibility = secondNameScore[0] + secondNameScore[1];

  return {first_name_compatibility: Number(firstNameCompatibility), second_name_compatibility: Number(secondNameCompatibility)};
}
//HeroName.prototype.countFalse = function (name1, name2, keyword) {
//  let firstnameCompatibility;
//  let secondnameCompatibility;
//  let score1 = [];
  //let score2 = [];
  //for(let letter of keyword) {
    //const names = name1.split(letter).length - 1;
    //const heroes = name2.split(letter).length - 1;
    //score1.push(names);
    //score2.push(heroes);
  //}
  //score1 = score1.map(x => x.toString());
  //score2 = score2.map(x => x.toString());
  //while(score1.length > 2)
  //  score1.splice(0, 2, Number(score1[0]) + Number(score1[1]))
  //firstnameCompatibility = Number(score1[0]) + Number(score1[1]);
  //while(score2.length > 2)
  //  score2.splice(0, 2, Number(score2[0]) + Number(score2[1]))
  //secondnameCompatibility = Number(score2[0]) + Number(score2[1]);

  //return {first_name_compatibility: firstnameCompatibility, second_name_compatibility: secondnameCompatibility};
//}
export default count;