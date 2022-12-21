import CanvasUtil from './CanvasUtil.js';
import GameItem from './GameItem.js';

export default class Player extends GameItem {
  public constructor(maxX: number, maxY: number) {
    super();
    this.posX = maxX / 2;
    this.posY = maxY - 100;
    this.speedX = 6;
    this.acceleration = 1;
    this.image = CanvasUtil.loadNewImage('./assets/basket.png');
  }

  public move(direction: number) {
    if (direction === 0) this.posX -= this.speedX;
    if (direction === 1) this.posX += this.speedX;
  }

  public isColliding(item: GameItem): boolean {
    return (
      item.getPosX() > this.posX - 50
      && item.getPosX() < this.posX + this.image.width
      && item.getPosY() + item.getHeight() > this.posY
      && item.getPosY() < this.posY + this.image.height
    );
  }
}
