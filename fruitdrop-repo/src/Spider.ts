import CanvasUtil from './CanvasUtil.js';
import GameItem from './GameItem.js';

export default class Spider extends GameItem {
  public constructor(maxX: number) {
    super();
    this.posX = maxX * Math.random();
    this.posY = -50;
    this.speedY = 2;
    this.acceleration = 1;
    this.scoreModifier = -3;

    const spiderImages: string[] = ['./assets/spider01.png', './assets/spider02.png', './assets/spider03.png', './assets/spider04.png'];
    this.image = CanvasUtil.loadNewImage(spiderImages[Math.round(Math.random() * 3)]);
  }
}
