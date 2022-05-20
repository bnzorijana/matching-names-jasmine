import { count } from "./HeroName.js";

const comparator = document.getElementById("comparator")
const fSelect = document.getElementById("f_name")
const sSelect = document.getElementById("s_name")
const submit = document.getElementById("btn_compare")
const resultFirst = document.getElementById("result_first")
const resultSecond = document.getElementById("result_second")
submit.addEventListener("click", () => {
  const result = count(
      fSelect.value,
      sSelect.value,
      comparator.value
  )
  resultFirst.innerText = result.first_name_compatibility;
  resultSecond.innerText = result.second_name_compatibility
})