import { describe, expect, it, vi } from 'vitest';

import { processRobot, simulateRobots, turnLeft, turnRight } from './martianRobots';

vi.mock('./constants', () => ({
  DIRECTIONS: ['N', 'E', 'S', 'W'],
  MOVES: {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
  },
  MAX_COORDINATE: 50,
}));

describe('Martian Robots', () => {
  describe('turnLeft', () => {
    it('should turn left from N to W', () => {
      expect(turnLeft('N')).toBe('W');
    });

    it('should turn left from W to S', () => {
      expect(turnLeft('W')).toBe('S');
    });

    it('should turn left from S to E', () => {
      expect(turnLeft('S')).toBe('E');
    });

    it('should turn left from E to N', () => {
      expect(turnLeft('E')).toBe('N');
    });
  });

  describe('turnRight', () => {
    it('should turn right from N to E', () => {
      expect(turnRight('N')).toBe('E');
    });

    it('should turn right from E to S', () => {
      expect(turnRight('E')).toBe('S');
    });

    it('should turn right from S to W', () => {
      expect(turnRight('S')).toBe('W');
    });

    it('should turn right from W to N', () => {
      expect(turnRight('W')).toBe('N');
    });
  });

  describe('processRobot', () => {
    it('should move forward and update position', () => {
      const result = processRobot(0, 0, 'N', 'F', 5, 5, new Set());
      expect(result).toEqual({ coordinates: { x: 0, y: 1 }, direction: 'N', lost: false });
    });

    it('should change direction on turn commands', () => {
      const result = processRobot(1, 1, 'N', 'LLR', 5, 5, new Set());
      expect(result).toEqual({ coordinates: { x: 1, y: 1 }, direction: 'W', lost: false });
    });

    it('should mark as lost when moving off grid and leave scent', () => {
      const scents = new Set<string>();
      const result = processRobot(0, 0, 'S', 'F', 5, 5, scents);
      expect(result).toEqual({ coordinates: { x: 0, y: 0 }, direction: 'S', lost: true });
      expect(scents.has('0,0')).toBeTruthy();
    });

    it('should ignore a move that would fall when scent is present', () => {
      const scents = new Set<string>(['0,0']);
      const result = processRobot(0, 0, 'S', 'F', 5, 5, scents);
      expect(result).toEqual({ coordinates: { x: 0, y: 0 }, direction: 'S', lost: false });
    });
  });

  describe('simulateRobots', () => {
    it('should return correct output for sample input', () => {
      const input = `5 3
    1 1 E
    RFRFRFRF
    3 2 N
    FRRFLLFFRRFLL
    0 3 W
    LLFFFLFLFL`;

      const result = simulateRobots(input);

      expect(result).toBe(`1 1 E
3 3 N LOST
2 3 S`);
    });

    it('should handle single robot moving forward', () => {
      const input = `5 5
      0 0 N
      FFF`;

      const result = simulateRobots(input);

      expect(result).toBe('0 3 N');
    });

    it('should handle robot falling off grid', () => {
      const input = `2 2
      2 2 N
      F`;

      const result = simulateRobots(input);

      expect(result).toBe('2 2 N LOST');
    });

    it('should handle scent preventing robot from falling', () => {
      const input = `2 2
      2 2 N
      F
      2 2 N
      F`;

      const result = simulateRobots(input);

      expect(result).toBe(`2 2 N LOST
2 2 N`);
    });

    it('should handle robot with only turns', () => {
      const input = `5 5
      1 1 N
      LLR`;

      const result = simulateRobots(input);

      expect(result).toBe('1 1 W');
    });

    it('should handle multiple robots on same grid', () => {
      const input = `3 3
      0 0 E
      FF
      2 2 W
      FF`;

      const result = simulateRobots(input);

      expect(result).toBe(`2 0 E
0 2 W`);
    });

    it('should handle robot with no instructions', () => {
      const input = `3 3
      1 1 N
      `;

      const result = simulateRobots(input);

      expect(result).toBe('Please provide instructions');
    });

    it('should handle robot with too long instructions', () => {
      const input = `3 4
      1 1 N
      ${'F'.repeat(101)}`;

      const result = simulateRobots(input);

      expect(result).toBe('Instructions too long');
    });

    it('should handle invalid grid size', () => {
      const input = `51 51
      1 1 N
      F`;

      const result = simulateRobots(input);

      expect(result).toBe('Invalid grid size');
    });

    it('should handle invalid robot position', () => {
      const input = `5 5
      6 6 N
      F`;

      const result = simulateRobots(input);

      expect(result).toBe('Invalid robot position');
    });
  });
});
