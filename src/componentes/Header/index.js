import { h } from "preact"
import styled from "styled-components"

const HeaderContainer = styled.header`
  height: 5rem;
  background: ${({theme}) => theme.colors.main}; // remover quando tiver a imagem
  ${({ theme }) => theme.mediaqueries.lgUp} {
    height: 18.75rem;
  }
`

const Header = () => (
  <HeaderContainer>
    <h1>Horta organica</h1>
    <h2>Movimento dos Trabalhadores Sem Teto</h2>
  </HeaderContainer>
)

export default Header