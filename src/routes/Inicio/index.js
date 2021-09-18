import { h } from 'preact';
import styled from 'styled-components';
import Layout from '../../componentes/Layout';
import Texto from '../../componentes/Texto';

const Content = styled.section`
	padding: 4rem 8rem;
`

const TextContent = styled.div``

const Home = () => (
	<Layout>
		<Content>
			<TextContent>
				<Texto as="h2" variant="title">Como funciona</Texto>
				<Texto>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sed sed risus hendrerit. Id viverra amet, ultrices tellus nunc. Bibendum tempor commodo dictumst pretium, nunc, enim, laoreet. Egestas sed odio velit volutpat. Viverra nibh tristique purus adipiscing. Dictum tellus, in ut mauris. Massa convallis vulputate tellus ut arcu dictum. Aenean mi mauris purus malesuada massa. Eu elit, ac urna, bibendum sagittis ultricies id.
					Consequat aenean at tincidunt nulla id lacus, vitae. A, fermentum enim faucibus metus nibh varius. Aliquam velit condimentum ultricies neque enim cursus magna. Tempor, amet consequat neque dignissim. Nunc ullamcorper vulputate blandit odio aliquet sit. Egestas id rhoncus in risus malesuada lacinia porta. Arcu fringilla praesent ultrices fames lectus justo ac at. Consectetur tempor, vitae lorem pretium, imperdiet purus justo 
				</Texto>
			</TextContent>
			<TextContent>
				<Texto as="h2" variant="title">Como estão nossas plantas</Texto>
				<Texto>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sed sed risus hendrerit. Id viverra amet, ultrices tellus nunc. Bibendum tempor commodo dictumst pretium, nunc, enim, laoreet. Egestas sed odio velit volutpat. Viverra nibh tristique purus adipiscing. Dictum tellus, in ut mauris. </Texto>
			</TextContent>
		</Content>
	</Layout>
);

export default Home;
