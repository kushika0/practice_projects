 function calculateTip() {
      // Get values from input fields
      let bill = document.getElementById("billAmount").value;
      let tipPercent = document.getElementById("tipPercent").value;

      // Convert to numbers
      bill = parseFloat(bill);
      tipPercent = parseFloat(tipPercent);

      // Check for valid input
      if (isNaN(bill) || isNaN(tipPercent) || bill <= 0 || tipPercent < 0) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
      }

      // Calculate tip and total
      let tip = bill * (tipPercent / 100);
      let total = bill + tip;

      // Display result
      document.getElementById("result").innerHTML =
        `Tip Amount: ₹${tip.toFixed(2)} <br> Total Amount: ₹${total.toFixed(2)}`;
    }