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
}

export enum ButtonSize {
  MEDIUM = "medium",
  LARGE = "large",
}

const VARIANT_MAPS: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]:
    "text-black dark:text-white bg-white dark:bg-black border border-gray-700 rounded-full hover:text-white hover:dark:text-black hover:bg-black hover:dark:bg-white",
};

const SIZE_MAPS: Record<ButtonSize, string> = {
  [ButtonSize.MEDIUM]: "py-2 px-4 text-sm",
  [ButtonSize.LARGE]: "py-4 px-12 text-base",
};

export default Button;
