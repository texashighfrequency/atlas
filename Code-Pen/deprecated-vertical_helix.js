let leftColor = "#40C575";
let rightColor = "#ce2029";



var duration = 1.0;

let tl = gsap.timeline();

var ease = Linear.easeNone;
var each = .4;

tl.to(".line",{
  ease: ease,
  duration: duration,
  drawSVG:"50% 50%",
  stagger:{
    each: each,
    yoyo: true,
    repeat: -1
  }
},0)
  .to(".left",{
  ease: ease,
  duration: duration * 2,
  x:423.334-361.728,
  fill: rightColor,
  stagger:{
    each: each,
    yoyo: true,
    repeat: -1
  }
},0)
  .to(".right",{
  ease: ease,
  duration: duration * 2,
  fill: leftColor,
  x:-(423.334-361.728),
  stagger:{
    each: each,
    yoyo: true,
    repeat: -1
  }
},0).seek(50);
