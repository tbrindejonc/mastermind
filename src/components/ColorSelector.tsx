import {useCurrentColor} from '../providers/CurrentColorProvider';
import type {GameColor} from '../types/app_types';
import Circle from './Circle';

/**
 * Selector to change current circle color before submitting an answer
 */
export default function ColorSelector() {
  const {changeCurrentColor} = useCurrentColor();

  const possibleColors: GameColor[] = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE', 'PINK', 'BROWN'];

  return (
    <div className='bg-app-darker shadow-app-text grid grid-cols-2 gap-6 rounded-md p-6 shadow-[0_0_4px_0]'>
      {possibleColors.map((color: GameColor) => (
        <button
          onClick={() => {
            changeCurrentColor(color);
          }}
          className='hover:shadow-app-main size-fit rounded-full transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0_0_4px_4px]'
        >
          <Circle key={color} color={color} size={'LARGE'} />
        </button>
      ))}
    </div>
  );
}
