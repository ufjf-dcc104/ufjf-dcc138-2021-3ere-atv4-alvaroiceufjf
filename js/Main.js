import AssetManager from "./AssetManager.js";
import Cena from "./Cena.js"; 
import Sprite from "./Sprite.js";

assets.carregaImagem("cavaleiro","assets/knight.png");
assets.carregaImagem("esqueleto","assets/skelly.png");
assets.carregaImagem("orc","assets/orc.png");
document.body.appendChild(assets.img("cavaleiro"));
document.body.appendChild(assets.img("esqueleto"));
document.body.appendChild(assets.img("orc"));

const assets = new AssetManager();

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const cena1 = new Cena(canvas,assets);

const pc = new Sprite({vx:10});
const en1 = new Sprite({x:140, w:30,color:"red"});

cena1.adicionar(pc);
cena1.adicionar(en1);
cena1.iniciar();

document.addEventListener("keydown" , (e)=>{
    switch(e.key){
        case "s":
            cena1.iniciar();
            break;
        case "S":
            cena1.parar();
            break;
        default:
    }
});