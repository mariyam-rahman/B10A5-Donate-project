const donateNowBtns = document.getElementsByClassName("donate-now-btn");
for (const donateNowBtn of donateNowBtns) {
  donateNowBtn.addEventListener("click", function (event) {
    const btn = event.target;
    const parent = btn.parentNode;
    const inputField = parent.getElementsByTagName("input")[0];
    const inputValue = parseFloat(inputField.value);

    if (isNaN(inputValue) || inputValue <= 0) {
      alert("Please enter a valid amount");
      inputField.value = "";
      return;
    }

    const myTotalBal = parseFloat(getTextFieldById("my-bal"));
    if (inputValue > myTotalBal) {
      alert("You don't have enough balance to donate.");
      inputField.value = "";
      return;
    }

    const currentDonatedBal = parseFloat(
      getTextFieldById("current-donated-bal")
    );
    const newDonatedBal = inputValue + currentDonatedBal;

    const donatedAmount = parent.getElementsByClassName(
      "current-donation-bal"
    )[0];
    donatedAmount.innerText = newDonatedBal;
    inputField.value = "";

    const newTotalBal = myTotalBal - inputValue;
    document.getElementById("my-bal").innerText = newTotalBal;
  });
}
