import { h } from "preact"
import styled from "styled-components"
import Texto from "../Texto"

const FooterContainer = styled.footer`
  padding: 2.25rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.main};
`

const Footer = () => (
  <FooterContainer>
    <Texto variant="footer">Desenvolvido pelo <a>Nucleo de Tecnologia</a></Texto>
  </FooterContainer>
)

export default Footer