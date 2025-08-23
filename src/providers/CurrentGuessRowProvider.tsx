import {createContext, useContext, useState, type ReactNode} from 'react';
import type {CurrentGuessRowContext, GameColor} from '../types/app_types';

type Props = {
  children: ReactNode;
  circleNumber: number;
};

// create the current guess row context as undefined first
const CGRContext = createContext<CurrentGuessRowContext | undefined>(undefined);

/**
 * CurrentGuessRowProvider component to provide current guess row context
 *
 * @param children - children components which can access the context
 */
export default function CurrentGuessRowProvider({children, circleNumber}: Props) {
  const [currentGuessRow, setCurrentGuessRow] = useState<GameColor[]>(Array(circleNumber).fill('WHITE'));

  /**
   * Check if the current guess row is complete before guessing
   */
  const checkCanGuess = (): boolean => {
    return currentGuessRow.every((color: GameColor) => color !== 'WHITE');
  };

  /**
   * Reset the current guess row to the initial state
   */
  const resetCurrentGuess = () => {
    setCurrentGuessRow(Array(circleNumber).fill('WHITE'));
  };

  /**
   * Change the color of a specific circle in the current guess row
   *
   * @param index {number} - The index of the circle to change
   * @param color {GameColor} - The new color for the circle
   */
  const changeCircleColor = (index: number, color: GameColor) => {
    setCurrentGuessRow((prev: GameColor[]) =>
      prev.map((previousColor: GameColor, currentIndex: number) => (index === currentIndex ? color : previousColor)),
    );
  };

  return (
    <CGRContext.Provider value={{currentGuessRow, checkCanGuess, resetCurrentGuess, changeCircleColor}}>
      {children}
    </CGRContext.Provider>
  );
}

/**
 * Custom hook to access the current guess row context.
 */
export const useCurrentGuessRow = (): CurrentGuessRowContext => {
  const context = useContext<CurrentGuessRowContext | undefined>(CGRContext);
  if (!context) {
    throw new Error('useCurrentGuessRow must be used within a CurrentGuessRowProvider');
  }
  return context;
};
