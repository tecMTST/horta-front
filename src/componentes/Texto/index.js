// eslint-disable-next-line no-unused-vars
import { h } from 'preact';
import styled, { css } from 'styled-components'


// variações existentes no layout do figma. Utilização: <Texto variant="title">Exemplo</Texto>
const variantStyles = (theme, variant = 'primary') =>
  ({
    primary: css`
      color: ${theme.colors.body};
      font-size: ${theme.fontSizes.default};
      ${theme.mediaqueries.mdUp} {
        font-size: ${theme.fontSizes.body};
      }
    `,
    title: css`
      color: ${theme.colors.main};
      font-weight: 700;
      font-size: ${theme.fontSizes.body};
      ${theme.mediaqueries.mdUp} {
        font-size: ${theme.fontSizes.title};
      }
    `,
    smallTitle: css`
      color: ${theme.colors.dark};
      font-size: ${theme.fontSizes.body};
      font-weight: 500;
    `,
    small: css`
      color: ${theme.colors.dark};
      font-size: ${theme.fontSizes.default};
      font-weight: 300;
    `,
    footer: css`
      color: ${theme.colors.white};
      font-weight: 700;
      font-size: ${theme.fontSizes.body};
      ${theme.mediaqueries.mdUp} {
        font-size: ${theme.fontSizes.footer};
      }
    `
  }[variant]);

const Texto = styled.p`
  color: ${({ theme }) => theme.colors.body};
  font-size: ${({ theme }) => theme.fontSizes.body};
  ${({ theme, variant }) => variantStyles(theme, variant)};
`

export default Texto