const clockTitle = document.querySelector(".js-clock");

getClock = () => {
  const date2 = new Date();
  const date1 = new Date("2023-12-25T00:00:00");

  const gap = date1 - date2;
  const day = String(Math.floor(gap / (1000 * 60 * 24 * 60))).padStart(2, "0");
  const hour = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const min = String(Math.floor((gap / (1000 * 60)) % 60)).padStart(2, "0");
  const secound = String(Math.floor((gap / 1000) % 60)).padStart(2, "0");
  const waitXmas = `${day}d ${hour}h ${min}m ${secound}s`;
  clockTitle.innerText = waitXmas;
};
getClock();
setInterval(getClock, 1000);
