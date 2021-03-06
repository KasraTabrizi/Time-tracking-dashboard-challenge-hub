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

const selectButton = (time) => {
  const timeButton = document.querySelectorAll("[data-name]");
  timeButton.forEach((button) => {
    if (button.dataset.name === time) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
};

const renderData = (time) => {
  //add active class for highlight click
  selectButton(time);

  //render data
  itemBlock.forEach((item, index) => {
    //current hour
    item.childNodes[1].childNodes[3].childNodes[1].innerText = `${fetchedData[index].timeframes[time].current}hrs`;

    //previous hour
    let timePeriod = "";
    if (time === "daily") timePeriod = "Yesterday";
    if (time === "weekly") timePeriod = "Last week";
    if (time === "monthly") timePeriod = "Last month";

    //.previous__hour/time_period
    item.childNodes[1].childNodes[3].childNodes[3].childNodes[0].innerText =
      timePeriod;

    //.previous__hour/hour
    item.childNodes[1].childNodes[3].childNodes[3].childNodes[2].innerText = `${fetchedData[index].timeframes[time].previous}hrs`;
  });
};
