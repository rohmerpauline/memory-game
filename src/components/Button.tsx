import type { ComponentChildren } from 'preact';
import {
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
  type ButtonSize,
  type ButtonType,
  type ButtonVariant,
} from '../constants/buttonStyle';

interface ButtonProps {
  variant: ButtonVariant;
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  isSelected?: boolean;
  onClick?: any;
  children: ComponentChildren;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-orange-400 text-grey-50 hover:bg-orange-300 active:bg-orange-300 text-preset text-preset-8',
  secondary:
    'bg-blue-100 text-blue-800 hover:bg-blue-350 hover:text-grey-50 text-preset text-preset-8',
  selection:
    'text-preset text-preset-11 bg-blue-300 text-grey-50 hover:bg-blue-350 md:text-preset-6',
};

const sizes: Record<ButtonSize, string> = {
  default: 'px-100 py-100',
  big: 'px-400 py-100 text-preset text-preset-9 md:text-preset-5',
};

function Button({
  variant,
  size = BUTTON_SIZES.default,
  type = BUTTON_TYPES.button,
  disabled = false,
  isSelected = false,
  onClick,
  children,
}: ButtonProps) {
  const selectedStyle =
    'bg-blue-800 text-grey-50 hover:bg-blue-800 text-preset text-preset-11 md:text-preset-6';
  const variantClasses =
    variant === BUTTON_VARIANTS.selection && isSelected
      ? selectedStyle
      : variants[variant];

  return (
    <button
      className={`rounded-full w-full cursor-pointer ${variantClasses} ${sizes[size]}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
