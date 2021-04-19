let userURL = "http://www.tmlewin.co.uk/shirts/?";
  let prefCount = 0;
  let buttons = document.querySelectorAll(
    ".fit__btn, .fabric__btn, .cuff__btn, .promo__btn"
  );
  let backButton = document.querySelector(".slide--back");
  let nextButton = document.querySelector(".slide--next");
  let slideCount = 1;
  showSlide();

  //control buttons
  backButton.addEventListener("click", () => {
    slideCount--;
    showSlide();
  });

  nextButton.addEventListener("click", () => {
    slideCount++;
    showSlide();
  });

  //slides
  function showSlide() {
    let i;
    let catSlide = document.querySelectorAll(".category__slide");
    let sliderDot = document.querySelectorAll(".slider__dot");
    if (slideCount > catSlide.length) {
      slideCount = 1;
    }
    if (slideCount < 1) {
      slideCount = catSlide.length;
    }
    for (i = 0; i < catSlide.length; i++) {
      catSlide[i].style.display = "none";
    }
    // I hate the way I did the pips - makes me want to cry. I will fix one day I promise.
    if (slideCount === 1) {
      backButton.style.display = "none";
      sliderDot[0].classList.add("slider__dot--active");
      sliderDot[1].classList.remove("slider__dot--active");
      sliderDot[2].classList.remove("slider__dot--active");
    } else if (slideCount === catSlide.length) {
      nextButton.style.display = "none";
      sliderDot[0].classList.add("slider__dot--active");
      sliderDot[1].classList.add("slider__dot--active");
      sliderDot[2].classList.add("slider__dot--active");
    } else {
      backButton.style.display = "inline-block";
      nextButton.style.display = "inline-block";
      sliderDot[0].classList.add("slider__dot--active");
      sliderDot[1].classList.add("slider__dot--active");
      sliderDot[2].classList.remove("slider__dot--active");
    }
    catSlide[slideCount - 1].style.display = "block";
  }

  //adding click for each btn
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("btn__active");
    });
  });

  //final button to get results
  function generateURL() {
    userURL = "http://www.tmlewin.co.uk/shirts/?";
    prefCount = 0;
    buttons.forEach((btn) => {
      let dataValue = btn.dataset.value;
      let dataType = btn.dataset.type;
      if (btn.classList.contains("btn__active")) {
        prefCount++;
        console.log(
          "&" +
            "prefn" +
            prefCount +
            "=" +
            dataType +
            "&prefv" +
            prefCount +
            "=" +
            dataValue
        );
        userURL =
          userURL +
          "&" +
          "prefn" +
          prefCount +
          "=" +
          dataType +
          "&prefv" +
          prefCount +
          "=" +
          dataValue;
      } else {
        console.log("nope");
      }
      console.log(userURL);
      document.getElementById("final__btn").setAttribute("href", userURL);
    });
  }