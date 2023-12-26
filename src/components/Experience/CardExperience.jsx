import { Card, Col, Row } from 'react-bootstrap';
import { Tools } from '../common/Tools';
import PropTypes from 'prop-types';

export const CardExperience = ({ experience }) => {
	return (
		<Card className="bg-dark border-primary mt-2 rounded-4">
			<Card.Body>
				<Card.Title className="text-light">
					<Row>
						<Col md="auto" className="m-0 p-0">
							<img
								alt={`${experience.employer}-logo`}
								src={experience.image}
								style={{ width: '90px', height: '55px' }}/>
						</Col>
						<Col className="my-auto">{experience.jobTitle}</Col>
						
					</Row>
				</Card.Title>
				<Card.Text className="fst-italic text-info">{experience.startDate} - {experience.endDate}</Card.Text>
				<Tools tools={experience.tools}/>
				<Card.Text>
					{experience.jobDescription}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

CardExperience.propTypes = {
	experience: PropTypes.shape({
		jobTitle: PropTypes.string.isRequired,
		employer: PropTypes.string.isRequired,
		workType: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		jobDescription: PropTypes.string.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		tools: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
			})
		).isRequired,
	}).isRequired,
};
