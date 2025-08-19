import {createContext, useContext, useState, type ReactNode} from 'react';
import type {GameState, GameStateContext} from '../types/app_types';

type Props = {
  children: ReactNode;
};

// create the game state context as undefined first
const GSContext = createContext<GameStateContext | undefined>(undefined);

/**
 * GameStateProvider component to provide game state context
 *
 * @param children - children components which can access the context
 */
export default function GameStateProvider({children}: Props) {
  const [gameState, setGameState] = useState<GameState>('HOME');

  /**
   * Function to swap the current game state
   *
   * @param state - The new game state to set.
   */
  const swapState = (state: GameState) => {
    setGameState(state);
  };

  return <GSContext.Provider value={{gameState, swapState}}>{children}</GSContext.Provider>;
}

/**
 * Custom hook to access the game state context.
 */
export const useGameState = (): GameStateContext => {
  const context: GameStateContext | undefined = useContext(GSContext);
  if (!context) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};
