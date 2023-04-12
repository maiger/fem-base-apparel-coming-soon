const form = document.querySelector(".email__container");
const input = document.querySelector(".email__input");
const invalid = document.querySelector(".email__invalid");
const invalidIcon = document.querySelector(".email__invalid-icon");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = input.value;
  const valid = validateEmail(value);

  if (valid) {
    input.value = "";
    input.classList.remove("invalid");
    invalid.classList.add("hidden");
    invalidIcon.classList.add("hidden");
  } else {
    input.classList.add("invalid");
    invalid.classList.remove("hidden");
    invalidIcon.classList.remove("hidden");
  }
});

function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return input.match(validRegex) && input != "";
}
