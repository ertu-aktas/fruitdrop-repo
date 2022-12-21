import { Game } from './GameLoop.js';

import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import GameItem from './GameItem.js';

export default class FruitDrop extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private player: Player;

  private item: GameItem[] = [];

  private score: number;

  private timeLeft: number;

  private timeToNextItem: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();

    this.player = new Player(this.canvas.width, this.canvas.height);
    this.score = 0;
    this.timeLeft = 60000;
    this.timeToNextItem = 500;
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    if (this.player.getPosX() > 0) {
      if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) this.player.move(0);
    }

    if (this.player.getPosX() < this.canvas.width - 100) {
      if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) this.player.move(1);
    }
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    return true;
  }

  /**
   * Render all the elements in the screen.
   */
  public render(): void {
    CanvasUtil.clearCanvas(this.canvas);
    this.player.render(this.canvas);
  }
}
