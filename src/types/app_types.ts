// circle to display in home view
export type HomeCircle = {
  color: string;
  position: string;
};

// possible game states
export type GameState = 'HOME' | 'CONFIG' | 'PLAYING';

// context for game state
export type GameStateContext = {
  gameState: GameState;
  swapState: (state: GameState) => void;
};
