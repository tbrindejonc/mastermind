import {useEffect, useState} from 'react';
import type {ColorNumber, GameColor} from '../types/app_types';
import Circle from './Circle';
import {useCurrentColor} from '../providers/CurrentColorProvider';
import {useCurrentGuessRow} from '../providers/CurrentGuessRowProvider';

type Props = {
  circleNumber: ColorNumber;
};

/**
 * Row to guess an answer
 *
 * @param circleNumber {ColorNumber} - The number of circles in the row
 */
export default function GuessRow({circleNumber}: Props) {
  const [current, setCurrent] = useState<number>(0);

  // get current color from color selector
  const {currentColor} = useCurrentColor();
  const {currentGuessRow, changeCircleColor} = useCurrentGuessRow();

  // when current color changes
  useEffect(() => {
    // if the color is different from white
    if (currentColor !== 'WHITE') {
      // change the color of current circle
      changeCircleColor(current, currentColor);

      // move to next circle
      setCurrent((prev: number) => (prev + 1) % circleNumber);
    }
  }, [currentColor]);

  return (
    <div className='flex flex-row items-center space-x-[3vw]'>
      {currentGuessRow.map((circleColor: GameColor, index: number) => {
        const isCurrent = index === current;

        return (
          <div
            onClick={() => setCurrent(index)}
            className={`${isCurrent ? 'shadow-app-main shadow-[0_0_5px_5px]' : ''} rounded-full hover:cursor-pointer`}
          >
            <Circle key={index} color={circleColor} size='LARGE' />
          </div>
        );
      })}
    </div>
  );
}
