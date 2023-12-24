import { Button, Card, Container } from 'react-bootstrap';
import { Header } from './components/Navbar';

function App() {
	return (
		<>
			<Header />
			<Container>
				<Card style={{ width: '18rem' }} className="bg-black border-primary mt-2">
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the cars content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</Container>
		</>
	);
}

export default App;
