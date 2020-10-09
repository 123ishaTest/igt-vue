import {Game} from "./game/Game";

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
