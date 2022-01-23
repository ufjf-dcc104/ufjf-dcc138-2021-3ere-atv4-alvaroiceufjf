import Cena from "./Cena.js"; 
import Sprite from "./Sprite.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
console.log("canvas");
const cena1 = new Cena(canvas);
cena1.desenhar();
const pc = new Sprite({x=100,y=100,w=20,h=20,color="white"});
const en1 = new Sprite({x=50,y=100,w=20,h=undefined,color="red"});

pc.desenhar(ctx);
en1.desenhar(ctx);