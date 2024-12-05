// Import stylesheets
import './style.css';
// Importiere p5
import p5 from 'p5';

// Funktion Setup
function setup(p: p5) {
  p.createCanvas(500, 450); // Mache Bereich
}

//Funktion Draw
function draw(p: p5) {
  p.background('black'); // Hintergrund Schwarz
  rectangles(p); // rufe Funktion Rechtecke auf
}

//Rechtecke
function rectangles(p: p5) {
  p.colorMode(p.HSB, 500); //Farbmodus HSB
  for (let x = 25; x < 475; x += 25) {
    //Widerhohle
    for (let y = 25; y < 425; y += 25) {
      //Widerhohle
      p.fill(x, 500, 500); //Fülle aus
      p.rect(x + p.random(-2, 2), y + p.random(-2, 2), 20, 20); //Zufällige Rechtecke erstellen
    }
  }
}
const p = new p5((p: p5) => {
  p.setup = () => setup(p);
  p.draw = () => draw(p);
  return p;
});
