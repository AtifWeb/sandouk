let FaqHead = document.querySelectorAll(".faq_wrapper .faq .head");

FaqHead.forEach((EachHead) => {
  EachHead.addEventListener("click", (e) => {
    let Parent = e.target.closest(".faq");

    Parent.classList.toggle("active");
  });
});
