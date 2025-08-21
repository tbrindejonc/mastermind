import {createContext, useContext, useState, type ReactNode} from 'react';
import type {CurrentColorContext, GameColor} from '../types/app_types';

type Props = {
  children: ReactNode;
};

// create the current color context as undefined first
const CCContext = createContext<CurrentColorContext | undefined>(undefined);

/**
 * CurrentColorProvider component to provide current color context
 *
 * @param children - children components which can access the context
 */
export default function CurrentColorProvider({children}: Props) {
  const [currentColor, setCurrentColor] = useState<GameColor>('WHITE');

  /**
   * Change the current color
   *
   * @param color {GameColor} - The new color to set
   */
  const changeCurrentColor = (color: GameColor) => {
    setCurrentColor(color);
  };

  return <CCContext.Provider value={{currentColor, changeCurrentColor}}>{children}</CCContext.Provider>;
}

/**
 * Custom hook to access the current color context.
 */
export const useCurrentColor = (): CurrentColorContext => {
  const context = useContext<CurrentColorContext | undefined>(CCContext);
  if (!context) {
    throw new Error('useCurrentColor must be used within a CurrentColorProvider');
  }
  return context;
};
