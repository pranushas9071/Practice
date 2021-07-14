var can = document.getElementById("container");
var last;
var pen = can.getContext("2d");
can.addEventListener("touchstart", end);
can.addEventListener("touchmove", draw);
can.addEventListener("touchend", end);
function draw(ev) {
  if (last != null) {
    pen.beginPath();
    pen.lineWidth = 3;
    pen.strokeStyle = "blue";
    pen.moveTo(last.x, last.y);
    //console.log(last.x);
    pen.lineTo(ev.touches[0].clientX, ev.touches[0].clientY);
    pen.stroke();
  }
  last = { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
  const x = ev.touches[0].clientX; // 0 th index => first finger
  const y = ev.touches[0].clientY;
  const b = document.getElementById("dis");
  b.innerHTML = "X : " + x + "Y : " + y;
}
function end(ev) {
  ev.preventDefault();
  last = null;
  const t = ev.targetTouches.length;
  const a = document.getElementById("test");
  a.innerHTML = "No.of fingers : " + t;
}
