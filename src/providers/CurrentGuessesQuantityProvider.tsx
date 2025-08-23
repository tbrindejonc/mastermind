import {createContext, useContext, type ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

// create the current guesses quantity context as undefined first
const CGQContext = createContext<undefined>(undefined);

/**
 * CurrentGuessesQuantityProvider component to provide current guesses quantity context
 *
 * @param children - children components which can access the context
 */
export default function CurrentGuessesQuantityProvider({children}: Props) {
  return <CGQContext.Provider value={undefined}>{children}</CGQContext.Provider>;
}

/**
 * Custom hook to access the current guesses quantity context.
 */
export const useCurrentGuessesQuantity = () => {
  const context = useContext<undefined>(CGQContext);
  if (!context) {
    throw new Error('useCurrentGuessesQuantity must be used within a CurrentGuessesQuantityProvider');
  }
  return context;
};
