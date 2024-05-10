function loading() {
  const tl = gsap.timeline();
  tl.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });
  tl.from(
    ".yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    ".loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to(".loader", {
    display: "none",
  });
  tl.to(".loader", {
    opacity: 0,
  });
}
loading();

function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  document.querySelector(".footer h2").addEventListener("click", () => {
    scroll.scrollTo(0);
  });

  const elems = document.querySelectorAll(".elem");
  const page2 = document.querySelector(".page2");
  console.log(elems);
  for (let elem of elems) {
    elem.addEventListener("mouseenter", () => {
      const bg = elem.getAttribute("data-img");
      // main.style.backgroundColor = "red";
      console.log(bg);
      page2.style.backgroundImage = `url(${bg})`;
    });
  }
}
loco();
