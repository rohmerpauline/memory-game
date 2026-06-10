export const BUTTON_VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  selection: 'selection',
} as const;

export const BUTTON_SIZES = {
  default: 'default',
  big: 'big',
} as const;

export const BUTTON_TYPES = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
} as const;

export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

export type ButtonType = (typeof BUTTON_TYPES)[keyof typeof BUTTON_TYPES];
