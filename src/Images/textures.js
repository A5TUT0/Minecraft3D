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
const obsidianTexture = new TextureLoader().load(obsidianImg);
const stoneTexture = new TextureLoader().load(stoneImg);

// Asegúrate de que todas las texturas se exporten
export {
  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture,
  obsidianTexture,
  stoneTexture,
};
