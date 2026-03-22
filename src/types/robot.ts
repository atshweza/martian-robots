export type Direction = 'N' | 'E' | 'S' | 'W';

export type Instruction = 'L' | 'R' | 'F';

export type Coordinates = { x: number; y: number };

export interface RobotState {
  coordinates: Coordinates;
  direction: Direction;
  lost: boolean;
}

export interface Grid {
  maxX: number;
  maxY: number;
}
