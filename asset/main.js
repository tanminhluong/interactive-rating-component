const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(
    `Something went wrong, make sure that ${selector} exists or is typed correctly`
  );
};

const listContainer = selectElement(".rate-list");
const submitBtn = selectElement(".btn");
const normalState = selectElement(".normal");
const thankyouState = selectElement(".thank-you");
const thankyouText = selectElement(".thank-you-text");
let ratingRes;

const listItems = listContainer.getElementsByClassName("list-item");

const getRating = (item) => {
  return item.getAttribute("data-rate");
};

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
    ratingRes = getRating(this);
  });
}

submitBtn.addEventListener("click", () => {
  normalState.style.display = "none";
  thankyouState.style.display = "block";
  thankyouText.innerHTML = `You select ${ratingRes} out of 5`;
});
