let burger_icon = document.querySelector(".burger_icon");

document.querySelector("body").addEventListener("click", (e) => {
  console.log(e.target.classList[0]);
  if (
    e.target.id != "main_nav_side" &&
    e.target.classList[0] != "burger_icon"
  ) {
    console.log("Inner working");
    if (document.querySelector("header nav").classList.contains("active")) {
      document.querySelector("header nav").classList.remove("active");
    }
  }
});

burger_icon.addEventListener("click", (e) => {
  setTimeout(() => {
    document.querySelector("header nav").classList.toggle("active");
  }, 100);
});
