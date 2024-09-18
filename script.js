function loadingAnimation() {
  var tl = gsap.timeline();
  
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 5);
    },
  });

  tl.to(".line h2", {
    animationName: "loaderAnime",
    opacity: 1,
  });

  tl.to("#loader", {
    duration: 0.2,
    delay: 0.5,
  });

  tl.from("#page1", {
    y: 1600,
    duration: 0.5,
    opacity: 1,
    ease: Power4,
  });

  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav",{
    opacity: 0
  })

  tl.from("#hero1 h1, #hero2 h1,#hero3 h2, #hero3 h3, #hero4 h1",{
    y: 100,
    stagger: 0.2
  })
}

function mouseAnimation(){
  document.addEventListener("mousemove", function (e) {
    gsap.to("#cursor",{
      top: e.y,
      left: e.x,
    })
  })
  
  Shery.makeMagnet("#navpart2 h4", {});
}

loadingAnimation();
mouseAnimation();