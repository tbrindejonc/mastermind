import type {AnswerStatus, CircleSize, GameColor, Row} from '../types/app_types';
import Circle from './Circle';

type Props = {
  row: Row;
  size: CircleSize;
};

/**
 * Display a row of circles
 *
 * @param row <Row> - The row to display
 * @param size <CircleSize> - The size of the circles
 */
export default function Row({row, size}: Props) {
  return (
    <div className='flex flex-row items-center space-x-[3vw]'>
      {row.map((color: GameColor | AnswerStatus, index: number) => (
        <Circle key={index} color={color} size={size} />
      ))}
    </div>
  );
}
