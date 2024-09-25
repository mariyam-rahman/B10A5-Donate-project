const donateNowBtns = document.getElementsByClassName("donate-now-btn");

for (const donateNowBtn of donateNowBtns) {
  donateNowBtn.addEventListener("click", function (event) {
    const btn = event.target;
    const parent = btn.closest(".card-body");
    const inputField = parent.getElementsByTagName("input")[0];
    const inputValue = parseFloat(inputField.value);
    const donationName = parent.querySelector(".card-title").innerText;

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
      parent.getElementsByClassName("current-donation-bal")[0].innerText
    );

    const newDonatedBal = inputValue + currentDonatedBal;
    console.log({ inputValue, currentDonatedBal, newDonatedBal });

    const donatedAmount = parent.getElementsByClassName(
      "current-donation-bal"
    )[0];
    donatedAmount.innerText = newDonatedBal;

    const newTotalBal = myTotalBal - inputValue;
    document.getElementById("my-bal").innerText = newTotalBal;

    inputField.value = "";

    const modal = document.getElementById("my_modal");
    modal.showModal();

    updateHistory(donationName, inputValue);
  });
}

function updateHistory(donationName, amount) {
  const historySection = document.getElementById("history-section");
  const historyList = document.createElement("div");
  const transactionDate = new Date().toLocaleString();

  historyList.innerHTML = `
    <div class="border mx-3 border-gray-200 rounded-xl p-8 my-5">
      <h2> <span class="font-bold">${amount} Taka </span> is Donated for ${donationName}</h2>
      <p>Date: ${transactionDate}</p>
    </div>`;

  historySection.appendChild(historyList);
  historySection.classList.remove("hidden");
}
