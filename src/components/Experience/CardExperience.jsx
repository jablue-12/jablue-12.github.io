import { Button, Card } from 'react-bootstrap';

export const CardExperience = () => {
	return (
		<Card className="bg-black border-primary mt-2">
			<Card.Body>
				<Card.Title>Card Experience</Card.Title>
				<Card.Text>
					Description
					<br/>
					Some quick example text to build on the card title and make up the
					bulk of the cars content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};
