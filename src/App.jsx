import { Container } from 'react-bootstrap';
import { Header } from './components/Navbar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Project } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';


function App() {
	return (
		<>
			<Header />
			<Container className="mt-5 pt-3">
				<About/>
				<Experience/>
				<Project/>
				<Education/>
				<Contact/>
			</Container>
		</>
	);
}

export default App;
