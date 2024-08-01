const image = document.querySelector(".image");
const tooltip = document.querySelector(".tooltip");

image.addEventListener("mousemove", (e) => {
  tooltip.style.left = e.clientX + "px";
  tooltip.style.top = e.clientY - tooltip.offsetHeight - 10 + "px";
  tooltip.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
});

image.addEventListener("mouseover", () => {
  tooltip.style.display = "block";
});

image.addEventListener("mouseout", () => {
  tooltip.style.display = "none";
});
