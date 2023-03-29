// const s = ( p ) => {
//     let w = window.innerWidth;
//     let h = window.innerHeight;
  
//     p.setup = function() {
//         p.createCanvas(w,h);
//         p.background(100);  
//     };
  
//     p.draw = function() {
//         if (p.mouseIsPressed) {
//             p.fill(0);
//           } else {
//             p.fill(255);
//           }
//          p.ellipse(p.mouseX, p.mouseY, 80, 80);
//     };
//   };


function setup(){
    let w = window.innerWidth;
    let h = window.innerHeight;
    createCanvas(w,h);
    background(100);  
}

function draw(){
    if (mouseIsPressed) {
        fill(0);
      } else {
        fill(255);
      }
     ellipse(mouseX, mouseY, 80, 80);
}

let myp5 = new p5(s,'p5Container');
