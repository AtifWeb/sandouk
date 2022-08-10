let FaqHead = document.querySelectorAll(".faq_wrapper .faq .head");
let myTimeline = new TimelineLite();
let myTimeline2 = new TimelineLite();
let myTimeline3 = new TimelineLite();

myTimeline.staggerTo(".stagger1", 0.5, { opacity: 1, y: 0 }, 0.06);
myTimeline.staggerTo(".stagger", 0.2, { opacity: 1, y: 0 }, 0.03);
myTimeline2.to(".stagger2", 2, { opacity: 1 });
myTimeline3.to(".stagger3", 2, { opacity: 1 });
FaqHead.forEach((EachHead) => {
  EachHead.addEventListener("click", (e) => {
    let Parent = e.target.closest(".faq");

    Parent.classList.toggle("active");
  });
});

window.addEventListener("scroll", (e) => {
  let Scroll_top = document.querySelector("main").getBoundingClientRect().top;

  if (Scroll_top > 0) {
    document.querySelector(".header_wrapper").classList.remove("active");
  } else {
    document.querySelector(".header_wrapper").classList.add("active");
  }
});
