import styled, { css } from "styled-components";

interface StyledButtonProps {
  primary?: boolean;
  secondary?: boolean;
  size?: "small" | "medium" | "large";
}

export const Button = styled.button<StyledButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: #1ea7fd;
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 12px;
      padding: 10px 16px;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      font-size: 14px;
      padding: 11px 20px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      font-size: 16px;
      padding: 12px 24px;
    `}
`;
