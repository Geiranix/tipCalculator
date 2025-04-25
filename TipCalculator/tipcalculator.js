let getElement = (id) => document.getElementById(id);
// let getClassName = (className) => document.getElementsByClassName(className);
billAmount = getElement("input-bill");
peopleNumber = getElement("input-number-of-people");
tipAmount = getElement("tip-amount");
totalPerPerson = getElement("total-bill");
errorMessage = getElement("error-message");

let buttons = document.getElementsByClassName("tip-btn");

let selectedButtonValue = 0;
let billValue = "";
let numOfPeople = "";
for (const button of buttons) {
  const value = button.dataset.key;
  button.addEventListener(
    "click",
    () => {
      if (selectedButtonValue !== 0 && value === selectedButtonValue) {
        window.alert("You have already selected this button");
        return;
      }
      selectedButtonValue = value;
      if (value === selectedButtonValue) {
        button.classList.add("selected-button");
      }
    },
    false
  );
}
billAmount.addEventListener(
  "change",
  (e) => {
    billValue = Number.parseInt(e.target.value);
  },
  false
);

peopleNumber.addEventListener(
  "change",
  (e) => {
    numOfPeople = Number.parseInt(e.target.value);
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
  totalPerPerson.innerText = `$${((tipPerPerson + billValue) / numOfPeople).toFixed(2)}`;
}

// dollarRemoval = (string)=>{
//     return string.slice(1,5)
//  }

// const keys =document.getElementsByTagName("button")

// for(const key of keys){
// let btnValue = key.dataset.key;
// console.log(typeof btnValue);

// key.addEventListener("click", function(){
// if(btnValue == "0.05"){
//     console.log("this is 5%")
//     if(billAmount.value == "" || peopleNumber.value=="" || (billAmount.value == "" || peopleNumber.value=="")){
//         numberErrorMessage.style.visibility="visible"
//     }
//     else {

//         numberErrorMessage.style.visibility="hidden"
//         calculatedTip = `$${eval((0.05*billAmount.value)).toFixed(2)}`
//         tipAmount.value= calculatedTip
//         tipAmount.textContent = tipAmount.value

//         tipAmount.value = dollarRemoval(tipAmount.value);
//         calculatedTotalPerPerson = `$${eval((Number(billAmount.value) + Number(tipAmount.value))/peopleNumber.value).toFixed(2)}`
//         totalPerPerson.value= calculatedTotalPerPerson
//         totalPerPerson.textContent = totalPerPerson.value
//     }
// }

// else if(btnValue == "0.1"){
//     console.log("this is 10%")
//     if(billAmount.value == "" || peopleNumber.value==""){
//         numberErrorMessage.style.visibility="visible"
//     }
//     else {

//         numberErrorMessage.style.visibility="hidden"
//         calculatedTip = `$${eval((0.1*billAmount.value)).toFixed(2)}`
//         tipAmount.value= calculatedTip
//         tipAmount.textContent = tipAmount.value

//         tipAmount.value = dollarRemoval(tipAmount.value);
//         calculatedTotalPerPerson = `$${eval((Number(billAmount.value) + Number(tipAmount.value))/peopleNumber.value).toFixed(2)}`
//         totalPerPerson.value= calculatedTotalPerPerson
//         totalPerPerson.textContent = totalPerPerson.value
//     }
// }
// else if(btnValue == "0.15"){
//     console.log("this is 15%")
//     if(billAmount.value == "" || peopleNumber.value==""){
//         numberErrorMessage.style.visibility="visible"
//     }
//     else {
//         numberErrorMessage.style.visibility="hidden"
//         calculatedTip = `$${eval((0.15*billAmount.value)).toFixed(2)}`
//         tipAmount.value= calculatedTip
//         tipAmount.textContent = tipAmount.value

//         tipAmount.value = dollarRemoval(tipAmount.value);
//         calculatedTotalPerPerson = `$${eval((Number(billAmount.value) + Number(tipAmount.value))/peopleNumber.value).toFixed(2)}`
//         totalPerPerson.value= calculatedTotalPerPerson
//         totalPerPerson.textContent = totalPerPerson.value
//     }
// }
// else if(btnValue == "0.25"){
//     console.log("this is 25%")
//     if(billAmount.value == "" || peopleNumber.value==""){
//         numberErrorMessage.style.visibility="visible"
//     }
//     else {
//         numberErrorMessage.style.visibility="hidden"
//         calculatedTip = `$${eval((0.25*billAmount.value)).toFixed(2)}`
//         tipAmount.value= calculatedTip
//         tipAmount.textContent = tipAmount.value

//         tipAmount.value = dollarRemoval(tipAmount.value);
//         calculatedTotalPerPerson = `$${eval((Number(billAmount.value) + Number(tipAmount.value))/peopleNumber.value).toFixed(2)}`
//         totalPerPerson.value= calculatedTotalPerPerson
//         totalPerPerson.textContent = totalPerPerson.value
//     }
// }
// else if(btnValue == "0.5"){
//     console.log("this is 50%")
//     if(billAmount.value == "" || peopleNumber.value==""){
//         numberErrorMessage.style.visibility="visible"
//     }
//     else {
//         numberErrorMessage.style.visibility="hidden"
//         calculatedTip = `$${eval((0.5*billAmount.value)).toFixed(2)}`
//         tipAmount.value= calculatedTip
//         tipAmount.textContent = tipAmount.value

//         tipAmount.value = dollarRemoval(tipAmount.value);
//         calculatedTotalPerPerson = `$${eval((Number(billAmount.value) + Number(tipAmount.value))/peopleNumber.value).toFixed(2)}`
//         totalPerPerson.value= calculatedTotalPerPerson
//         totalPerPerson.textContent = totalPerPerson.value
//     }
// }

// else if(btnValue == "clear"){
//     numberErrorMessage.style.visibility="hidden"
//     tipAmount.textContent="$0.00";
//     totalPerPerson.textContent ="$0.00"

// }
// else{
//     console.log("other keys have not been specified")
// }
// },false)

// }

// customInput= getElement("input-tip")
// customInput.addEventListener("input",(event)=>{
//     if(billAmount.value == "" || peopleNumber.value==""){
//         numberErrorMessage.style.visibility="visible"
//     }
//     else {
//         numberErrorMessage.style.visibility="hidden"
//         eventValue = event.target.value
//         console.log(eventValue)
//         eventValue=Number(eventValue)
//         calculatedTip = `$${eval(((eventValue/100)*billAmount.value)).toFixed(2)}`;
//         tipAmount.value= calculatedTip
//         tipAmount.textContent = tipAmount.value

//         tipAmount.value = dollarRemoval(tipAmount.value);
//         calculatedTotalPerPerson = `$${eval((Number(billAmount.value) + Number(tipAmount.value))/peopleNumber.value).toFixed(2)}`
//         totalPerPerson.value= calculatedTotalPerPerson
//         totalPerPerson.textContent = totalPerPerson.value
//     }
// },false)
