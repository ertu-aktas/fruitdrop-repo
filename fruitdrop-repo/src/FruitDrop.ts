import { Game } from './GameLoop.js';

import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';

export default class FruitDrop extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {

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

  }
}
