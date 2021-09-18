import { h } from "preact";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  
`

const Layout = ({ children }) => (
  <Container>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </Container>
)

export default Layout
