import CanvasUtil from './CanvasUtil.js';

export default abstract class GameItem {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  protected speedX: number;

  protected speedY: number;

  protected acceleration: number;

  protected scoreModifier: number;

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  public getScoreModifier(): number {
    return this.scoreModifier;
  }

  public update(elapsed: number): void {
    this.posY += elapsed * this.speedY;
    this.speedY *= this.acceleration;
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
