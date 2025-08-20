import {createContext, useContext, useState, type ReactNode} from 'react';
import type {AnswerIndicator, ColorNumber, GameConfig, GameConfigContext, MaxAttempts} from '../types/app_types';

type Props = {
  children: ReactNode;
};

// create the game configuration context as undefined first
const GCContext = createContext<GameConfigContext | undefined>(undefined);

/**
 * GameConfProvider component to provide game configuration context
 *
 * @param children - children components which can access the context
 */
export default function GameConfProvider({children}: Props) {
  const [gameConfig, setGameConfig] = useState<GameConfig>({
    colorNumber: 4,
    answerIndicator: 'PARTIAL',
    maxAttempts: 'INFINITE',
  });

  /**
   * Choose the number of colors for the game
   *
   * @param colorNumber - The number of colors to use
   */
  const chooseColorNumber = (colorNumber: ColorNumber) => {
    setGameConfig((prev: GameConfig) => ({...prev, colorNumber}));
  };

  /**
   * Choose the answer indicator for the game
   *
   * @param answerIndicator - The answer indicator to use
   */
  const chooseAnswerIndicator = (answerIndicator: AnswerIndicator) => {
    setGameConfig((prev: GameConfig) => ({...prev, answerIndicator}));
  };

  /**
   * Choose the maximum number of attempts for the game
   *
   * @param maxAttempts - The maximum number of attempts to use
   */
  const chooseMaxAttempts = (maxAttempts: MaxAttempts) => {
    setGameConfig((prev: GameConfig) => ({...prev, maxAttempts}));
  };

  return (
    <GCContext.Provider value={{gameConfig, chooseColorNumber, chooseAnswerIndicator, chooseMaxAttempts}}>
      {children}
    </GCContext.Provider>
  );
}

/**
 * Custom hook to access the game configuration context.
 */
export const useGameConfig = (): GameConfigContext => {
  const context = useContext<GameConfigContext | undefined>(GCContext);
  if (!context) {
    throw new Error('useGameConfig must be used within a GameConfProvider');
  }
  return context;
};
