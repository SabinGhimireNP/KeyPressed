const input = document.querySelectorAll(".controls input");

function handel() {
  console.log(this.value);
  console.log(this.name);
  let val = this.dataset.sizing || "";
  //   console.log(val);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + val
  );
}
input.forEach((input) => input.addEventListener("change", handel));
