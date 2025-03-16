let stepan = document.querySelector(".stepan");
let NeStepan = document.querySelector(".Nestepan");
let stepanContainer = document.querySelector(".buttons");
let inputs = document.querySelector(".input__box");
let input = document.querySelector(".input__stepans");
let submitt = document.querySelector(".submit");
let inputs2 = document.querySelector(".input__box2");
let input2 = document.querySelector(".input__stepans2");
let submitt2 = document.querySelector(".submit2");
let choice = document.querySelector(".choice");
let plus = document.querySelector(".deistvie-plus");
let minus = document.querySelector(".deistvie-minus");
let umn = document.querySelector(".deistvie-umn");
let delit = document.querySelector(".deistvie-delit");
let result = document.querySelector(".result__value");

let StepanValue = 0;
let stepan1 = 0;
let stepan2 = 0;
stepan.addEventListener("click", function () {
  StepanValue = 1;
  stepanContainer.style.display = "none";
  inputs.style.display = "block";
  result.textContent = StepanValue;
});
NeStepan.addEventListener("click", function () {
  StepanValue = -1;
  stepanContainer.style.display = "none";
  inputs.style.display = "block";
});
submitt.addEventListener("click", function (e) {
  stepan1 = input.value * StepanValue;
  inputs.style.display = "none";
  inputs2.style.display = "block";
  console.log(stepan1);
  e.preventDefault();
});
submitt2.addEventListener("click", function (e) {
  stepan2 = input2.value * StepanValue;
  inputs.style.display = "none";
  inputs2.style.display = "none";
  choice.style.display = "block";
  console.log(stepan2);
  e.preventDefault();
});
plus.addEventListener("click", function (e) {
  StepanValue = parseInt(stepan1) + parseInt(stepan2);
  result.textContent = StepanValue;
  e.preventDefault();
});
minus.addEventListener("click", function (e) {
  StepanValue = parseInt(stepan1) - parseInt(stepan2);
  result.textContent = StepanValue;
  e.preventDefault();
});
umn.addEventListener("click", function (e) {
  StepanValue = parseInt(stepan1) * parseInt(stepan2);
  result.textContent = StepanValue;
  e.preventDefault();
});
delit.addEventListener("click", function (e) {
  StepanValue = parseInt(stepan1) / parseInt(stepan2);
  result.textContent = StepanValue;
  e.preventDefault();
});
