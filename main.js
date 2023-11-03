const clock = document.querySelector(".clock");

let seconds = 11;

function getTime() {
  const date = new Date();

  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let amPm = "AM";

  if (hrs > 11) amPm = "PM";
  if (hrs > 12) hrs %= 12;

  clock.innerText = `${amPm} ${String(hrs).padStart(2, "0")}:${String(
    min
  ).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

getTime();
setInterval(getTime, 1000);
