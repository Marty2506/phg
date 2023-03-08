const sidePanel = document.querySelector(".side-panel");

if (sidePanel) {
  const tariffButton = sidePanel.querySelector("#side-panel-tariff");
  const tariffSection = document.querySelector("#tariffs");
  const scheduleSection = document.querySelector("#timetable");
  const scrollUpButton = sidePanel.querySelector("#side-panel-to-top");
  const scheduleButton = sidePanel.querySelector("#side-panel-schedule");

  if (tariffSection) {
    tariffButton.addEventListener("click", (e) => {
      e.preventDefault();
      tariffSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (scheduleSection) {
    scheduleButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("clicked");
      scheduleSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  scrollUpButton.addEventListener("click", (evt) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", (evt) => {
    if (
      document.body.scrollTop > SCROLL_SIZE ||
      document.documentElement.scrollTop > SCROLL_SIZE
    ) {
      sidePanel.classList.add("side-panel--active");
    } else {
      sidePanel.classList.remove("side-panel--active");
    }
  });
}
