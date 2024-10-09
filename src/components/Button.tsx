import { forwardRef } from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, ...props }, ref) => {
    return <StyledButton ref={ref} variant={variant} size={size} {...props} />;
  },
);

Button.displayName = "Button";

const StyledButton = styled.button<ButtonProps>`
  padding: 0 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  ${({ variant, size }) => {
    if (size === "large" && variant === "primary") {
      return `
        min-width: 148px;
        height: 44px;
        background-color: var(--color-primary-500);
        color: white;
        border: none;

        &:hover, &:active {
          background-color: var(--color-primary-600);
        }

        &:disabled {
          background-color: var(--color-grey-300);
          cursor: not-allowed;
        }
      `;
    }

    if (size === "large" && variant === "secondary") {
      return `
        min-width: 148px;
        height: 44px;
        background-color: white;
        color: black;
        border: 1px solid var(--color-grey-300);

        &:hover, &:active {
          background-color: var(--color-grey-50);
          border: 1px solid var(--color-grey-400);
        }

        &:disabled {
          background-color: var(--color-grey-50);
          border: 1px solid var(--color-grey-200);
          color: var(--color-grey-300);
          cursor: not-allowed;
        }
      `;
    }

    if (size === "medium" && variant === "primary") {
      return `
        min-width: 96px;
        height: 36px;
        background-color: var(--color-blue-400);
        color: white;
        border: none;
        font-weight: 500;

        &:hover, &:active {
          background-color: var(--color-blue-500);
        }

        &:disabled {
          background-color: var(--color-grey-300);
          cursor: not-allowed;
        }
      `;
    }

    if (size === "medium" && variant === "secondary") {
      return `
        min-width: 96px;
        height: 36px;
        background-color: white;
        color: black;
        border: 1px solid var(--color-grey-300);
        font-weight: 500;

        &:hover, &:active {
          background-color: var(--color-grey-50);
          border: 1px solid var(--color-grey-400);
        }

        &:disabled {
          background-color: var(--color-grey-50);
          border: 1px solid var(--color-grey-200);
          color: var(--color-grey-300);
          cursor: not-allowed;
        }
      `;
    }

    if (size === "medium" && variant === "tertiary") {
      return `
        min-width: 76px;
        height: 36px;
        background-color: var(--color-grey-50);
        color: var(--color-grey-600);
        border: none;
        font-weight: 500;

        &:hover, &:active {
          background-color: var(--color-grey-100);
          color: var(--color-grey-800);
        }
      `;
    }

    if (size === "small" && variant === "primary") {
      return `
        min-width: 76px;
        height: 32px;
        background-color: var(--color-grey-800);
        color: var(--color-grey-100);
        border: none;
        font-size: 14px;
        font-weight: 500;

        &:hover, &:active {
          background-color: var(--color-grey-600);
        }
      `;
    }

    return "";
  }}
`;
