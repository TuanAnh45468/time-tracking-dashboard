const toggleBtn = document.querySelectorAll(".toggleBtn");

function hideAllData() {
  const dataSections = document.querySelectorAll(
    ".dailyData, .weeklyData, .monthlyData"
  );
  dataSections.forEach((section) => {
    section.classList.add("hidden");
  });
}

function defaultData() {
  hideAllData();
  const dailyEl = document.querySelectorAll(".dailyData");

  dailyEl.forEach((el) => {
    el.classList.remove("hidden");
  });
}
defaultData();

function handleClick() {
  const targetClass = this.dataset.target;

  toggleBtn.forEach((btn) => {
    if (btn === this) {
      btn.classList.add("text-white");
    } else {
      btn.classList.remove("text-white");
    }
  });

  hideAllData();
  const classList = document.querySelectorAll(`.${targetClass}`);
  classList.forEach((el) => {
    el.classList.remove("hidden");
  });
}

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
