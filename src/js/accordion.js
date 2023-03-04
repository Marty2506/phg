const accordionItems = document.querySelectorAll(".accordion");

accordionItems.forEach((accordionItem) => {
  const accordionButton = accordionItem.querySelector(".accordion__header");
  const accordionContent = accordionItem.querySelector(".accordion__content");
  accordionButton.addEventListener("click", () => {
    accordionItem.classList.toggle("accordion--opened");
    console.log(accordionContent.style.maxHeight);
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
});
