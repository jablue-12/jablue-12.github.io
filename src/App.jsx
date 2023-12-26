
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Container } from 'react-bootstrap';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Header } from './components/Navbar';
import { Project } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
	return (
		<>
			<Header />
			<Container className="mt-5 pt-3">
				<About/>
				<Experience/>
				<Project/>
				<Education/>
				<Skills/>
				<Contact/>
			</Container>
		</>
	);
}

export default App;
