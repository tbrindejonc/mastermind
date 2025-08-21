import type {ColorNumber, Game, Row} from '../types/app_types';
import {chooseAnswer} from './choose_answer';

/**
 * Create a game with a defined number of colors
 *
 * @param colorNumber {ColorNumber} - The number of colors to use in the game
 */
export const initGame = <N extends ColorNumber>(colorNumber: N): Game<N> => {
  return {
    toGuess: chooseAnswer(colorNumber) as Row<N>,
    currentGuess: Array(colorNumber).fill('WHITE') as Row<N>,
    ancientGuesses: [],
  };
};
