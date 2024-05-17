import { Button as StyledButton } from "./Button.styles";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

export const Button = ({
  label,
  onClick,
  primary,
  secondary,
  size = "medium",
  disabled = false,
  backgroundColor,
}: ButtonProps) => {
  return (
    <StyledButton
      style={{ backgroundColor }}
      onClick={onClick}
      primary={primary}
      secondary={secondary}
      size={size}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};
