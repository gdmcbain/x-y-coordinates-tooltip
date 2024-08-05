const image = document.querySelector(".image");
const tooltip = document.querySelector(".tooltip");
const datum = document.querySelector(".datum");

image.addEventListener("mousemove", (e) => {
  const dX = e.offsetX - datum.X;
  const dY = e.offsetY - datum.Y;
  const r = Math.hypot(dX, dY);
  tooltip.style.left = e.clientX + "px";
  tooltip.style.top = e.clientY - tooltip.offsetHeight - 10 + "px";
  tooltip.textContent = `r: ${r}`;
});

image.addEventListener("mouseover", () => {
  tooltip.style.display = "block";
});

image.addEventListener("mouseout", () => {
  tooltip.style.display = "none";
});

image.addEventListener("mousedown", (e) => {
  datum.style.left = e.clientX + "px";
  datum.style.top = e.clientY - datum.offsetHeight + "px";
  datum.X = e.offsetX;
  datum.Y = e.offsetY;
  datum.textContent = "O";
});
