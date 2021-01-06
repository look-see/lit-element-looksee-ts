import testClickEvent from "./click-event";
import testDefaultValues from "./default-values";

document.addEventListener("DOMContentLoaded", async () => {
  await testDefaultValues();
  await testClickEvent();
});