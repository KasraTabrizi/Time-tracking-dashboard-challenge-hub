let fetchedData = [];

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    fetchedData = data;
  })
  .then(() => console.log(fetchedData));

const selectData = (time) => {
  console.log(time);
};

const dailyButton = document
  .getElementById("daily_button")
  .addEventListener("click", () => selectData("daily"));

const weeklyButton = document
  .getElementById("weekly_button")
  .addEventListener("click", () => selectData("weekly"));

const monthlyButton = document
  .getElementById("monthly_button")
  .addEventListener("click", () => selectData("monthly"));
