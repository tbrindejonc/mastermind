// circle to display in home view
export type HomeCircle = {
  color: GameColor;
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

// tuple for the row and answer row
export type Tuple<T, N extends number, R extends unknown[] = []> = R['length'] extends N ? R : Tuple<T, N, [...R, T]>;

// possible row lengths
export type GameRow<N extends ColorNumber = ColorNumber> = Tuple<GameColor, N>;

// possible answer row lengths
export type AnswerRow<N extends ColorNumber = ColorNumber> = Tuple<AnswerStatus, N>;

// game guess with associated answer
export type Guess<T extends ColorNumber> = {
  guess: GameRow<T>;
  answer: AnswerRow<T>;
};

// current game data
export type Game<T extends ColorNumber> = {
  toGuess: GameRow<T>;
  currentGuess: GameRow<T>;
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
  INCORRECT: 'bg-app-dark',
  PARTIAL: 'bg-app-cta',
};

// different sizes for circle component
export type CircleSize = 'SMALL' | 'LARGE';

// context for current color
export type CurrentColorContext = {
  currentColor: GameColor;
  changeCurrentColor: (color: GameColor) => void;
};

// context for current guess row
export type CurrentGuessRowContext = {
  currentGuessRow: GameColor[];
  currentIndex: number;
  nextIndex: () => void;
  resetIndex: () => void;
  setCurrentIndex: (index: number) => void;
  checkCanGuess: () => boolean;
  resetCurrentGuess: () => void;
  changeCircleColor: (index: number, color: GameColor) => void;
};
