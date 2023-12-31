import styled, { css } from "styled-components";

const ButtonStyle = css`
  display: block;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.2em;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;

export const Link = styled.a`
  ${ButtonStyle}
  text-decoration: underline;
`;

export const PrimaryButton = styled.button`
  ${ButtonStyle}
  background-color: #00bcd4;
  color: #fff;
`;

export const SecondaryButton = styled.button`
  ${ButtonStyle}
  background-color: transparent;
  color: inherit;
  border: 1px solid currentColor;
`;
