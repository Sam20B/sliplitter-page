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
    const myButtons = document.querySelectorAll('button');

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