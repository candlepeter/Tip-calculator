const bill = document.getElementById("bill");
const tipButtons = document.querySelectorAll(".btn");
const people = document.getElementById("people");
const tipAmountDisplay = document.querySelector(".tip-amount-display");
const totalDisplay = document.querySelector(".total-display");
const custom = document.querySelector(".custom");
const reset = document.getElementById("reset");
const errorMessage = document.querySelector(".error-message");


//looping through the buttons
for (let i = 0; i < tipButtons.length; i++) {

  tipButtons[i].addEventListener("click", checkParm);

  //function to check parameters
    function checkParm() {
      let billValue = bill.value;
      let peopleValue = people.value;
      let tipValue = tipButtons[i].value;
      let customValue = custom.value;
      let letters = /^[A-Za-z]+$/;

      //to check if input is not empty or not and regex to check if its alphabet
      if (billValue === "" && peopleValue === "") {
        errorMessage.textContent = "can not be zero";
        errorMessage.classList.remove("none");
        people.classList.add("people-error");

      } else if (billValue.match(letters) && peopleValue.match(letters)) {
        errorMessage.textContent = "can not be zero";
        errorMessage.classList.remove("none");
        people.classList.add("people-error");

      } else {

        errorMessage.classList.add("none");
        people.classList.remove("people-error");

        calcTip(billValue, peopleValue, tipValue, customValue)
      }
    };

};


//to run function checkParm when enter key is pressed
custom.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      checkParm();
    }
});

//function to calculate tip
  function calcTip(billValue, peopleValue, tipValue, customValue) {

    // if statement to check between custom and fixed percentage
    if (customValue) {
      let tipAmount = ((parseFloat(billValue)*(customValue/100))/parseInt(peopleValue)).toFixed(2);


      let total = ((parseFloat(billValue)*((customValue/100) + 1))/parseInt(peopleValue)).toFixed(2);

      tipAmountDisplay.textContent = "$" + tipAmount;
      totalDisplay.textContent = "$" + total;
    } else {

      let tipAmount = ((parseFloat(billValue)*(parseInt(tipValue)/100))/parseInt(peopleValue)).toFixed(2);


      let total = ((parseFloat(billValue)*((parseInt(tipValue)/100) + 1))/parseInt(peopleValue)).toFixed(2);

      tipAmountDisplay.textContent = "$" + tipAmount;
      totalDisplay.textContent = "$" + total;
    }
  }

//reset function
reset.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  custom.value = "";

  errorMessage.classList.add("none");
  people.classList.remove("people-error");

  tipAmountDisplay.textContent = "$0.00";
  totalDisplay.textContent = "$0.00";
})


