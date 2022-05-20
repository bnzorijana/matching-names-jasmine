//import fetch from "node-fetch";
export async function getHeroes() {
  const res = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json"
  );
  let heroes = await res.json();
  heroes = heroes.map((h) => h.name);
  return heroes;
}
export async function entryApp() {
  const heroNames = await getHeroes();
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
export default entryApp();