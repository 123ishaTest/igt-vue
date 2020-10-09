/**
 * Launching: The default, game is still starting up
 * Playing: Normal gameplay
 * Paused: Gameplay is suspended, to continue you need to resume
 * Stopped: Gameplay is stopped, to continue you need to start
 */
export enum GameState {
    Launching = "Launching",
    Playing = "Playing",
    Paused = "Paused",
    Stopped = "Stopped",
}
