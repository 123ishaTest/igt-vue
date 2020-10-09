import {Game} from "./ig-template/Game";

export class App {

    static game: Game;

    static start(): void {
        this.game = this.createNewGame()
        this.game.initialize();
        this.game.load();
        this.game.start();
    }

    static createNewGame(): Game {
        return new Game(
        );
    }
}
