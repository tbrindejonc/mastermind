import type {AnswerRow, ColorNumber, GameColor, GameRow, Guess} from '../types/app_types';

/**
 * Create a guess with a defined number of colors
 *
 * @param colorNumber {ColorNumber} - The number of colors to use in the guess
 */
export const createGuess = <N extends ColorNumber>(currentGuessRow: GameColor[], answer: GameRow<N>): Guess<N> => {
  // convert answer to check for correctness
  const realAnswer = answer as GameColor[];

  // for each color check if correctly placed
  const guessResult = currentGuessRow.map((color, index) => {
    if (color === realAnswer[index]) {
      return 'CORRECT';
    }
    return 'INCORRECT';
  });

  // return the guess
  return {
    guess: currentGuessRow as GameRow<N>,
    answer: guessResult as AnswerRow<N>,
  };
};
