import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Inicio from './routes/Inicio';
import Horta from './routes/Horta';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import tema from './tema';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
		font-family: 'Roboto', sans-serif;
  }
`

const App = () => (
	<div id="app">
		<GlobalStyle />
		<ThemeProvider theme={tema}>
			<Router>
				<Inicio path="/" />
				<Horta path="/horta/:id" />
			</Router>
		</ThemeProvider>
	</div>
)

export default App;
