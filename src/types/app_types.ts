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

// number of colors to guess
export type ColorNumber = 4 | 5 | 6;

// setting for answer indication when guessing
export type AnswerIndicator = 'PARTIAL' | 'FULL';

// setting for maximum attempts at guessing
export type MaxAttempts = 'TEN' | 'INFINITE';

// configuration for the game
export type GameConfig = {
  colorNumber: ColorNumber;
  answerIndicator: AnswerIndicator;
  maxAttempts: MaxAttempts;
};

// context for game configuration
export type GameConfigContext = {
  gameConfig: GameConfig;
  chooseColorNumber: (colorNumber: ColorNumber) => void;
  chooseAnswerIndicator: (answerIndicator: AnswerIndicator) => void;
  chooseMaxAttempts: (maxAttempts: MaxAttempts) => void;
};
