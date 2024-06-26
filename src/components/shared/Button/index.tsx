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
  const finalButtonClasses = `font-poppins font-medium ${ButtonVariantMap[variant]} ${ButtonSizeMap[size]}`;

  return (
    <button
      data-testid={"button-component"}
      className={finalButtonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export const ButtonVariantMap: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]:
    "text-neutral-50 dark:text-neutral-950 bg-neutral-950 dark:bg-neutral-50 border border-neutral-950 dark:border-neutral-50 rounded-full hover:text-neutral-950 hover:dark:text-neutral-50 hover:bg-neutral-50 hover:dark:bg-neutral-950 hover:border-neutral-950 hover:dark:border-neutral-50",
  [ButtonVariant.SECONDARY]:
    "text-neutral-950 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-950 border border-gray-700 dark:border-gray-300 rounded-full hover:text-neutral-50 hover:dark:text-neutral-950 hover:bg-neutral-950 hover:dark:bg-neutral-50",
};

export const ButtonSizeMap: Record<ButtonSize, string> = {
  [ButtonSize.SMALL]: "py-1 px-2 responsive-text-xs",
  [ButtonSize.MEDIUM]: "py-2 px-4 responsive-text-sm",
  [ButtonSize.LARGE]: "py-4 px-12 responsive-text-base",
};

export default Button;
