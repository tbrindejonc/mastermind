import {useEffect} from 'react';
import type {GameColor} from '../types/app_types';
import Circle from './Circle';
import {useCurrentColor} from '../providers/CurrentColorProvider';
import {useCurrentGuessRow} from '../providers/CurrentGuessRowProvider';

/**
 * Row to guess an answer
 */
export default function GuessRow() {
  // get current color from color selector
  const {currentColor} = useCurrentColor();
  const {currentGuessRow, currentIndex, setCurrentIndex, nextIndex, changeCircleColor} = useCurrentGuessRow();

  // when current color changes
  useEffect(() => {
    // if the color is different from white
    if (currentColor !== 'WHITE') {
      // change the color of current circle
      changeCircleColor(currentIndex, currentColor);

      // move to next circle
      nextIndex();
    }
  }, [currentColor]);

  return (
    <div className='flex flex-row items-center space-x-[3vw]'>
      {currentGuessRow.map((circleColor: GameColor, index: number) => {
        const isCurrent = index === currentIndex;

        return (
          <div
            onClick={() => setCurrentIndex(index)}
            className={`${isCurrent ? 'shadow-app-main shadow-[0_0_5px_5px]' : ''} rounded-full hover:cursor-pointer`}
          >
            <Circle key={index} color={circleColor} size='LARGE' />
          </div>
        );
      })}
    </div>
  );
}
