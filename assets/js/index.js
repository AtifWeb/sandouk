let FaqHead = document.querySelectorAll(".faq_wrapper .faq .head");
let myTimeline = new TimelineLite();
let myTimeline2 = new TimelineLite();
let myTimeline3 = new TimelineLite();
let myTimeline4 = new TimelineLite();
let activeFaq = null;
var controller = new ScrollMagic.Controller();
myTimeline.staggerTo(".stagger1", 0.5, { opacity: 1, y: 0 }, 0.06);
myTimeline.staggerTo(".stagger", 0.2, { opacity: 1, y: 0 }, 0.03);
myTimeline2.to(".stagger2", 2, { opacity: 1 });
myTimeline3.to(".stagger3", 2, { opacity: 1 });
FaqHead.forEach((EachHead) => {
  EachHead.addEventListener("click", (e) => {
    let Parent = e.target.closest(".faq");

    if (activeFaq != Parent && activeFaq != null) {
      activeFaq.classList.remove("active");
    }
    if (Parent.classList.contains("active")) {
      Parent.classList.remove("active");
    } else {
      Parent.classList.add("active");
    }

    activeFaq = Parent;
  });
});

let scene = new ScrollMagic.Scene({
  triggerElement: ".eco_system .grid_wrapper",
  triggerHook: 0.5,
  duration: 1000,
})
  .on("enter", function () {
    document.querySelector(".eco_system .grid_wrapper").classList.add("active");
  })

  .addTo(controller);

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".new",
  triggerHook: 0.5,
  duration: 1000,
})
  .on("enter", function () {
    document.querySelector(".protcol_cards_wrapper").classList.add("active");
  })

  .addTo(controller);
let scene3 = new ScrollMagic.Scene({
  triggerElement: ".protocolagain",
  triggerHook: 0.5,
  duration: 1000,
})
  .on("enter", function () {
    document
      .querySelector(".protocolagain .protcol_cards_wrapper")
      .classList.add("active");
  })

  .addTo(controller);

window.addEventListener("scroll", (e) => {
  let Scroll_top = document.querySelector("main").getBoundingClientRect().top;

  if (Scroll_top > 0) {
    document.querySelector(".header_wrapper").classList.remove("active");
  } else {
    document.querySelector(".header_wrapper").classList.add("active");
  }
});
