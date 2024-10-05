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

// Configurar texturas
grassTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
obsidianTexture.magFilter = NearestFilter; // Nueva textura
stoneTexture.magFilter = NearestFilter; // Nueva textura

export {
  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture,
  obsidianTexture, // Nueva textura
  stoneTexture, // Nueva textura
};
