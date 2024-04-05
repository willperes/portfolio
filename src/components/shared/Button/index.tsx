import { ButtonHTMLAttributes } from "react";

type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.LARGE,
  ...props
}: Props) => {
  const finalButtonClasses = `font-poppins font-medium ${VARIANT_MAPS[variant]} ${SIZE_MAPS[size]}`;

  return (
    <button {...props} className={finalButtonClasses}>
      {children}
    </button>
  );
};

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum ButtonSize {
  MEDIUM = "medium",
  LARGE = "large",
}

const VARIANT_MAPS: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]:
    "text-neutral-950 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-950 border border-gray-700 dark:border-gray-300 rounded-full hover:text-neutral-50 hover:dark:text-neutral-950 hover:bg-neutral-950 hover:dark:bg-neutral-50",
  [ButtonVariant.SECONDARY]:
    "text-neutral-50 dark:text-neutral-950 bg-neutral-950 dark:bg-neutral-50 border border-neutral-950 dark:border-neutral-50 rounded-full hover:text-neutral-950 hover:dark:text-neutral-50 hover:bg-neutral-50 hover:dark:bg-neutral-950 hover:border-neutral-950 hover:dark:border-neutral-50",
};

const SIZE_MAPS: Record<ButtonSize, string> = {
  [ButtonSize.MEDIUM]: "py-2 px-4 responsive-text-sm",
  [ButtonSize.LARGE]: "py-4 px-12 responsive-text-base",
};

export default Button;
