window.addEventListener("scroll", (e) => {
  let Scroll_top = document.querySelector("main").getBoundingClientRect().top;

  if (Scroll_top > 120) {
    document.querySelector(".header_wrapper").classList.remove("active");
  } else {
    document.querySelector(".header_wrapper").classList.add("active");
  }
});
let FaqHead = document.querySelectorAll(".faq_wrapper .faq .head");
FaqHead.forEach((EachHead) => {
  EachHead.addEventListener("click", (e) => {
    let Parent = e.target.closest(".faq");

    Parent.classList.toggle("active");
  });
});
