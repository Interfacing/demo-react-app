import { Card as StyledCard } from "./Card.styles";

interface CardProps {
  children?: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};
