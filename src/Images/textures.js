// src/images/textures.js
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

import {
  grassImg,
  dirtImg,
  logImg,
  glassImg,
  woodImg,
  obsidianImg,
  stoneImg,
} from "./images.js";

const grassTexture = new TextureLoader().load(grassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const obsidianTexture = new TextureLoader().load(obsidianImg); // Nueva textura
const stoneTexture = new TextureLoader().load(stoneImg); // Nueva textura

// Crear y configurar groundTexture (utilizando grassTexture como base)
const groundTexture = new TextureLoader().load(grassImg); // Puedes cambiar a otra textura si prefieres

// Configurar wrapping para repetir la textura en un plano grande
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;

// Configurar otras texturas
grassTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
obsidianTexture.magFilter = NearestFilter;
stoneTexture.magFilter = NearestFilter;

export {
  groundTexture, // Exportar groundTexture
  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture,
  obsidianTexture, // Nueva textura
  stoneTexture, // Nueva textura
};
