import CanvasUtil from './CanvasUtil.js';
import GameItem from './GameItem.js';

export default class Fruit extends GameItem {
  public constructor(maxX: number) {
    super();
    this.posX = maxX * Math.random();
    this.posY = -50;
    this.speedY = 4;
    this.acceleration = 1.003;
    this.scoreModifier += 1;

    const spiderImages: string[] = ['./assets/fruit-banana.png', './assets/fruit-cherries.png', './assets/fruit-grapes.png', './assets/fruit-orange.png', './assets/fruit-strawberry.png'];
    this.image = CanvasUtil.loadNewImage(spiderImages[Math.round(Math.random() * 3)]);
  }
}
