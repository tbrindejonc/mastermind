import {createContext, useContext, type ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

// create the current color context as undefined first
const CCContext = createContext<undefined>(undefined);

/**
 * CurrentColorProvider component to provide current color context
 *
 * @param children - children components which can access the context
 */
export default function CurrentColorProvider({children}: Props) {
  return <CCContext.Provider value={undefined}>{children}</CCContext.Provider>;
}

/**
 * Custom hook to access the current color context.
 */
export const useCurrentColor = (): undefined => {
  const context = useContext<undefined>(CCContext);
  if (!context) {
    throw new Error('useCurrentColor must be used within a CurrentColorProvider');
  }
  return context;
};
