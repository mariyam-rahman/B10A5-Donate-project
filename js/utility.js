function getTextFieldById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNum = parseFloat(textValue);
  return textNum;
}

// toggle function
function toggleSectionById(id) {
  document.getElementById("donation-cards").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

document.getElementById("donation-tab").addEventListener("click", function () {
  console.log("clicked");
  toggleSectionById("donation-cards");
});
document.getElementById("history-tab").addEventListener("click", function () {
  console.log("clicked2");
  toggleSectionById("history-section");
});
