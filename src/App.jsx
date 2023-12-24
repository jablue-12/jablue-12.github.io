import { Container } from 'react-bootstrap';
import { Header } from './components/Navbar';
import { Experience } from './components/Experience';
import { Project } from './components/Projects';



function App() {
	return (
		<>
			<Header />
			<Container>
				<Experience/>
				<Project/>
			</Container>
		</>
	);
}

export default App;
