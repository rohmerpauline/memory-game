export const THEME = {
  NUMBERS: 'numbers',
  ICONS: 'icons',
} as const;

export type Theme = (typeof THEME)[keyof typeof THEME];

export const PLAYERS = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
} as const;

export type Players = (typeof PLAYERS)[keyof typeof PLAYERS];

export const GRID_SIZE = {
  SMALL: '4x4',
  LARGE: '6x6',
} as const;

export type GridSize = (typeof GRID_SIZE)[keyof typeof GRID_SIZE];

export const SETTINGS_KEYS = {
  THEME: 'theme',
  PLAYERS: 'players',
  GRID_SIZE: 'gridSize',
} as const;
