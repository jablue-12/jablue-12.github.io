import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Tools } from '../common/Tools';

export const CardProject = ({ project }) => {
	return (
		<Card className="bg-black border-primary mt-2 rounded-4">
			<Card.Img variant="top" src={project.thumbnail} />
			<Card.Body>
				<Card.Title className="text-light">{project.title}</Card.Title>
				<Card.Text className="fst-italic text-primary">{project.startDate} - {project.endDate}</Card.Text>
				<Tools tools={project.tools}/>
				<Card.Text>
					{project.description}
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
			tools: PropTypes.arrayOf.isRequired,
			thumbnail: PropTypes.string.isRequired,
			sourceCode: PropTypes.string.isRequired,
			view: PropTypes.string.isRequired,
	}).isRequired,
};