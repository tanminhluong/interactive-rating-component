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

const listItems = listContainer.getElementsByClassName("list-item");

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
