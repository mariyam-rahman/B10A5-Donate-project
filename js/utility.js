function getTextFieldById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNum = parseFloat(textValue);
  return textNum;
}

// toggle function
function handleSelectDonationTab() {
  document.getElementById("donation-cards").classList.remove("hiddden");
  document.getElementById("history-section").classList.add("hiddden");

  document.getElementById("donation-tab-btn").classList.add("selected");
  document.getElementById("history-tab-btn").classList.remove("selected");
}

function handleSelectHistoryTab() {
  document.getElementById("donation-cards").classList.add("hiddden");
  document.getElementById("history-section").classList.remove("hiddden");

  document.getElementById("donation-tab-btn").classList.remove("selected");
  document.getElementById("history-tab-btn").classList.add("selected");
}
