let fetchedData = [];

const itemBlock = document.querySelectorAll("[data-target]");

const dailyButton = document
  .getElementById("daily_button")
  .addEventListener("click", () => renderData("daily"));

const weeklyButton = document
  .getElementById("weekly_button")
  .addEventListener("click", () => renderData("weekly"));

const monthlyButton = document
  .getElementById("monthly_button")
  .addEventListener("click", () => renderData("monthly"));

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    fetchedData = data;
  })
  .then(() => {
    console.log(fetchedData);
    //render weekly data after page loads
    renderData("weekly");
  });

const renderData = (time) => {
  //add active class for highlight click

  const timeButton = document.querySelectorAll("[data-name]");
  timeButton.forEach((button) => {
    if (button.dataset.name === time) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //document.getElementById("daily_button").classList.add("active");
  //render data
  itemBlock.forEach((item, index) => {
    //current hour
    item.childNodes[1].childNodes[3].innerText = `${fetchedData[index].timeframes[time].current}hrs`;

    //previous hour
    let timePeriod = "";
    if (time === "daily") timePeriod = "Yesterday";
    if (time === "weekly") timePeriod = "Last week";
    if (time === "monthly") timePeriod = "Last month";

    //.previous__hour/time_period
    item.childNodes[1].childNodes[5].childNodes[0].innerText = timePeriod;

    //.previous__hour/hour
    item.childNodes[1].childNodes[5].childNodes[2].innerText = `${fetchedData[index].timeframes[time].previous}hrs`;
  });
};
