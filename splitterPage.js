function validateNumber(input) {
    // Remove non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value === 0){
        alert('Please enter a valid number');
    }
  }
  function calculateTip() {
    // Get the entered amount
    const amountInput = document.getElementsByClassName('input1')[0];
    const amount = parseFloat(amountInput.value);

    // Get all button elements
    const myButtons = document.querySelectorAll('button:not(#b6)');

    // Iterate over the buttons to find the clicked button
    let clickedButton;
    for (const button of myButtons) {
        button.addEventListener('click', function() {
            // Store the clicked button
            clickedButton = button;

            // Get the text on the clicked button using innerText
            const buttonTextInnerText = clickedButton.innerText;

            // Calculate the tip amount based on the button text (assumed percentage)
            const tipAmount = (parseFloat(buttonTextInnerText) * amount) / 100;

            // Update the tipAmount input box with the calculated tip
            const tipAmountInput = document.getElementsByClassName('input2')[0];

            // Check if the tipAmountInput element exists
            if (tipAmountInput) {
                tipAmountInput.value = tipAmount.toFixed(2); // Display the tip amount with two decimal places
            } else {
                alert('Error: Unable to find the tip input element.');
            }
        });
    }
}
function cantBeZero() {
    const numberOfPeople = document.querySelector(".input3"); // Use querySelector to get the first element with class 'input3'
    const cantBeZeroElement = document.querySelector(".c1p4"); // Use querySelector to get the first element with class 'c1p4'
    const numberOfPeopleValue = parseFloat(numberOfPeople.value);

    if (numberOfPeopleValue === 0) {
        // If numberOfPeopleValue is 0, show the text
        cantBeZeroElement.style.display = 'block';
    } else {
        // If numberOfPeopleValue is not 0, hide the text
        cantBeZeroElement.style.display = 'none';
    }
}
function input3() {
    const numberOfPeople = document.querySelector(".input3"); // Use querySelector to get the first element with class 'input3'
    const numberOfPeopleValue = parseFloat(numberOfPeople.value);

    if (numberOfPeopleValue === 0) {
        // If numberOfPeopleValue is 0, change border color to red
        numberOfPeople.style.borderColor = '#e06767';
    } else {
        // If numberOfPeopleValue is not 0, maintain the green color
        numberOfPeople.style.borderColor = '#5fc7a4';
    }
}
function multiplyValues() {
    // Get the values from the input boxes
    const input1 = document.getElementsByClassName('input2');
    const input1Value = parseFloat(input1.value);
    const input2 = document.getElementsByClassName('input3').value;

    // Multiply the values
    const result = parseFloat(input1Value * input2);

    const input4 = document.getElementsByClassName('c2p7')[0];

    // Check if the input4 element exists
    if (input4) {
        input4.value = result.toFixed(2); // Display the input4 with two decimal places
    } else {
        alert('#.');
    }
  }
  function multiplyvalues2() {
    // Get the values from the input boxes
    const input1Value = document.getElementsByClassName('input1').value;
    const input3Value = document.getElementsByClassName('input3').value;

    const res = (parseFloat(input1Value * input3Value));

    const input5 = document.getElementsByClassName('c2p8')[0];

    // Check if the input4 element exists
    if (input5) {
        input5.value = res.toFixed(2); // Display the input4 with two decimal places
    } else {
        alert('#.');
    }
  }
  function notMoreThan(){
    //get the value that is in the number of people input box
    const input3value = document.getElementsByClassName('input3').value;

    if (input3value > 50) {
        alert('Number of people cannot exceed 50');
    }
  }