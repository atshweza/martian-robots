import type { Direction, RobotState } from '../../types/robot';
import { DIRECTIONS, MAX_COORDINATE, MOVES } from './constants';

export function turnLeft(direction: Direction): Direction {
  const idx = DIRECTIONS.indexOf(direction);
  return DIRECTIONS[(idx + 3) % 4];
}

export function turnRight(direction: Direction): Direction {
  const idx = DIRECTIONS.indexOf(direction);
  return DIRECTIONS[(idx + 1) % 4];
}

export function processRobot(startX: number, startY: number, startDir: Direction, instructions: string, maxX: number, maxY: number, scents: Set<string>): RobotState {
  let x = startX;
  let y = startY;
  let direction = startDir;
  let lost = false;

  for (const cmd of instructions) {
    if (cmd === 'L') {
      direction = turnLeft(direction);
    } else if (cmd === 'R') {
      direction = turnRight(direction);
    } else if (cmd === 'F') {
      const move = MOVES[direction];

      if (!move) {
        throw new Error(`Invalid direction during movement: ${direction}`);
      }

      const [dx, dy] = move;

      const nextX = x + dx;
      const nextY = y + dy;

      const isOffGrid = nextX < 0 || nextX > maxX || nextY < 0 || nextY > maxY;

      if (isOffGrid) {
        const scentKey = `${x},${y}`;

        if (!scents.has(scentKey)) {
          scents.add(scentKey);
          lost = true;
          break;
        }

        continue; // ignore move
      }

      x = nextX;
      y = nextY;
    }
  }

  return { coordinates: { x, y }, direction, lost };
}

export function simulateRobots(input: string): string {
  const lines = input
    .trim()
    .split('\n')
    .map((line) => line.trim());

  const [maxX, maxY] = lines[0].split(' ').map(Number);

  if (maxX > MAX_COORDINATE || maxY > MAX_COORDINATE || maxX < 0 || maxY < 0) {
    return 'Invalid grid size';
  }

  const scents = new Set<string>();
  const results: string[] = [];

  for (let i = 1; i < lines.length; i += 2) {
    const [xStr, yStr, dir] = lines[i].split(' ');
    const startX = Number(xStr);
    const startY = Number(yStr);

    if (startX > maxX || startY > maxY || startX < 0 || startY < 0) {
      results.push('Invalid robot position');
      i++; // skip instructions
      continue;
    }

    const instructions = lines[i + 1];

    if (!instructions) {
      results.push(`Please provide instructions`);
      continue;
    }

    if (instructions.length <= 100) {
      const result = processRobot(startX, startY, dir as Direction, instructions, maxX, maxY, scents);

      results.push(`${result.coordinates.x} ${result.coordinates.y} ${result.direction}${result.lost ? ' LOST' : ''}`);
    } else {
      results.push(`Instructions too long`);
    }
  }

  return results.join('\n');
}
