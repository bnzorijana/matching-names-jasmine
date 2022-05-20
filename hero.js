import fetch from "node-fetch";
//const fetch = require("node-fetch")
export async function getHeroes() {
  const res = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json"
  );
  return await res.json();
}
export async function entryApp() {
  let heroNames = await getHeroes();
  heroNames = heroNames.map((h) => h.name);
  const selects = document.querySelectorAll(".options");
  heroNames.forEach((hero) => {
    selects.forEach((select) => {
      const optionElement = document.createElement("option");
      optionElement.innerText = hero;
      optionElement.setAttribute("value", hero);
      select.appendChild(optionElement)
    })
  })
}
