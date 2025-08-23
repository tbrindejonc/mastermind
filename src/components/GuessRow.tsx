import {useEffect, useState} from 'react';
import type {ColorNumber, GameColor} from '../types/app_types';
import Circle from './Circle';
import {useCurrentColor} from '../providers/CurrentColorProvider';

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
  const [circles, setCircles] = useState<GameColor[]>(Array(circleNumber).fill('WHITE'));

  // get current color from color selector
  const {currentColor} = useCurrentColor();

  // when current color changes
  useEffect(() => {
    // change the color of current circle
    setCircles((prev: GameColor[]) =>
      prev.map((color: GameColor, index: number) => (index === current ? currentColor : color)),
    );

    // move to next circle
    setCurrent((prev: number) => (prev + 1) % circleNumber);
  }, [currentColor]);

  return (
    <div className='flex flex-row items-center space-x-[3vw]'>
      {circles.map((circleColor: GameColor, index: number) => {
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
