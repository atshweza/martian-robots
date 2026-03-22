import type { Direction } from '../../types/robot';

export const DIRECTIONS: Direction[] = ['N', 'E', 'S', 'W'];

export const MOVES: Record<Direction, [number, number]> = {
  N: [0, 1],
  E: [1, 0],
  S: [0, -1],
  W: [-1, 0],
};

export const MAX_COORDINATE = 50;
