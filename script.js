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
let result = document.querySelector(".result__value");

let StepanValue = 0;
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
  result.textContent = StepanValue;
});
submitt.addEventListener("click", function (e) {
  StepanValue *= input.value;
  inputs.style.display = "none";
  choice.style.display = "block";
  result.textContent = StepanValue;
  e.preventDefault();
});
