import {createContext, useContext, useState, type ReactNode} from 'react';
import type {CurrentGuessesQuantityContext} from '../types/app_types';

type Props = {
  children: ReactNode;
};

// create the current guesses quantity context as undefined first
const CGQContext = createContext<CurrentGuessesQuantityContext | undefined>(undefined);

/**
 * CurrentGuessesQuantityProvider component to provide current guesses quantity context
 *
 * @param children - children components which can access the context
 */
export default function CurrentGuessesQuantityProvider({children}: Props) {
  const [currentGuessesQuantity, setCurrentGuessesQuantity] = useState<number>(0);

  /**
   * Increment the current guesses quantity.
   */
  const incrementGuesses = () => {
    setCurrentGuessesQuantity((prev) => prev + 1);
  };

  /**
   * Reset the current guesses quantity.
   */
  const resetGuesses = () => {
    setCurrentGuessesQuantity(0);
  };

  return (
    <CGQContext.Provider value={{currentGuessesQuantity, incrementGuesses, resetGuesses}}>
      {children}
    </CGQContext.Provider>
  );
}

/**
 * Custom hook to access the current guesses quantity context.
 */
export const useCurrentGuessesQuantity = (): CurrentGuessesQuantityContext => {
  const context = useContext<CurrentGuessesQuantityContext | undefined>(CGQContext);
  if (!context) {
    throw new Error('useCurrentGuessesQuantity must be used within a CurrentGuessesQuantityProvider');
  }
  return context;
};
