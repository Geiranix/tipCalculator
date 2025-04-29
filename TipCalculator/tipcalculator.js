let getElement = (id) => document.getElementById(id);

billAmount = getElement("input-bill");
peopleNumber = getElement("input-number-of-people");
tipAmount = getElement("tip-amount");
totalPerPerson = getElement("total-bill");
errorMessage = getElement("error-message");
divBillContainer = getElement("div-input-id");
customInput = getElement("input-tip");
divPeopleInput = getElement("div-input-number");

let buttons = document.getElementsByClassName("tip-btn");

let selectedButtonValue = null;
let clicked = false;
let billValue = "";
let numOfPeople = "";
let buttonsArray = Array.from(buttons).slice(0, 6);
for (const button of buttonsArray) {
  let value = button.dataset.key;
  button.addEventListener("click", () => {
    for (const btn of buttonsArray) {
      btn.classList.remove("selected-button");
    }
    button.classList.add("selected-button");
    selectedButtonValue = value;
  });
}

billAmount.addEventListener(
  "input",
  (e) => {
    billValue = Number.parseInt(e.target.value);
  },
  false
);
billAmount.addEventListener("focus", () => {
  divBillContainer.classList.add("focus-state");
});
billAmount.addEventListener("blur", () => {
  divBillContainer.classList.remove("focus-state");
});

peopleNumber.addEventListener(
  "change",
  (e) => {
    numOfPeople = Number.parseInt(e.target.value);
  },
  false
);

peopleNumber.addEventListener("focus", () => {
  divPeopleInput.classList.add("focus-state");
});

peopleNumber.addEventListener("blur", () => {
  divPeopleInput.classList.remove("focus-state");
});

customInput.addEventListener(
  "input",
  (e) => {
    if (selectedButtonValue !== 0) {
      alert("You have selected a tip button already");
      e.target.value = "custom";
    } else {
      selectedButtonValue = e.target.value;
    }
  },
  false
);

function calculateTotal() {
  if (!billValue || billValue === 0) {
    errorMessage.textContent = "Bill can't be zero";
    return;
  }

  if (!numOfPeople || numOfPeople === 0) {
    errorMessage.textContent = "People can't be zero";
    return;
  }

  let tipPercentageValue = Number.parseInt(selectedButtonValue) / 100;
  let tipPerPerson = (billValue * tipPercentageValue) / numOfPeople;

  tipAmount.innerText = `$${tipPerPerson.toFixed(2)}`;
  totalPerPerson.innerText = `$${(
    (tipPerPerson + billValue) /
    numOfPeople
  ).toFixed(2)}`;
}

function reset() {
  billAmount.value = "0";
  peopleNumber.value = "0";
  tipAmount.textContent = "$0.00";
  totalPerPerson.textContent = "$0.00";
  selectedButtonValue = null;
  for(const btn of buttonsArray) {
    btn.classList.remove("selected-button")
  }
}

