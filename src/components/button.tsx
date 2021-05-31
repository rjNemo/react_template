import styled, { css } from 'styled-components';

type ButtonProps = {
  readonly primary: boolean;
};

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  margin: 0 1em;
  padding: 0 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: ${(props) => props.theme.colors.primary};
      color: white;
    `}
`;
