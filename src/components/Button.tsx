import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      type="button"
      className={classNames(
        `px-2 py-1 border border-black ${disabled && "opacity-50"}`,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
