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

// game possible colors
export type GameColor = 'RED' | 'ORANGE' | 'YELLOW' | 'GREEN' | 'BLUE' | 'PURPLE' | 'PINK' | 'BROWN' | 'WHITE';

// possible statuses for a color in an answer
export type AnswerStatus = 'CORRECT' | 'INCORRECT' | 'PARTIAL';

// possible row lengths
export type Row =
  | [GameColor, GameColor, GameColor, GameColor]
  | [GameColor, GameColor, GameColor, GameColor, GameColor]
  | [GameColor, GameColor, GameColor, GameColor, GameColor, GameColor];

// possible answer row lengths
export type AnswerRow =
  | [AnswerStatus, AnswerStatus, AnswerStatus, AnswerStatus]
  | [AnswerStatus, AnswerStatus, AnswerStatus, AnswerStatus, AnswerStatus]
  | [AnswerStatus, AnswerStatus, AnswerStatus, AnswerStatus, AnswerStatus, AnswerStatus];

// game guess with associated answer
export type Guess<T extends ColorNumber> = {
  guess: Row[T];
  answer: AnswerRow[T];
};

// current game data
export type Game<T extends ColorNumber> = {
  toGuess: Row[T];
  currentGuess: Row[T];
  ancientGuesses: Guess<T>[];
};

// map game colors to tailwind background colors
export const gameColorToBackground: Record<GameColor, string> = {
  RED: 'bg-game-red',
  ORANGE: 'bg-game-orange',
  YELLOW: 'bg-game-yellow',
  GREEN: 'bg-game-green',
  BLUE: 'bg-game-blue',
  PURPLE: 'bg-game-purple',
  PINK: 'bg-game-pink',
  BROWN: 'bg-game-brown',
  WHITE: 'bg-app-text',
};

// map answer statuses to tailwind background colors
export const answerStatusToBackground: Record<AnswerStatus, string> = {
  CORRECT: 'bg-app-main',
  INCORRECT: 'bg-app-cta',
  PARTIAL: 'bg-app-dark',
};
