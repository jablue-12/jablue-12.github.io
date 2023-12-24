import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const CardProject = ({ project }) => {
	return (
		<Card className="bg-black border-primary mt-2">
			<Card.Body>
				<Card.Title>{project.title}</Card.Title>
				<Card.Text>
					{project.description}
					<br/>
					{project.startDate}
					<br/>
					{project.endDate}
					<br/>
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

CardProject.propTypes = {
		project: PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			startDate: PropTypes.string.isRequired,
			endDate: PropTypes.string.isRequired,
			sourceCode: PropTypes.string.isRequired,
			view: PropTypes.string.isRequired,
	}).isRequired,
};