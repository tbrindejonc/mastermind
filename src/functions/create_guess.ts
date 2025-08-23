import type {AnswerRow, ColorNumber, GameColor, GameRow, Guess} from '../types/app_types';

/**
 * Create a guess with a defined number of colors
 *
 * @param colorNumber {ColorNumber} - The number of colors to use in the guess
 */
export const createGuess = <N extends ColorNumber>(currentGuessRow: GameColor[]): Guess<N> => {
  return {
    guess: currentGuessRow as GameRow<N>,
    answer: currentGuessRow.map(() => 'INCORRECT') as AnswerRow<N>,
  };
};
