import { Experiences } from '../../data/constants';
import { CardExperience } from './CardExperience';
import { Col, Row } from 'react-bootstrap';

export const Experience = () => {
	return (
		<>
			<h2 id="experience" className="mt-2 pt-2">Experience</h2>
			<Row xs={1} sm={1} md={2} lg={3}>
				{Experiences.map((experience, index) => (
					<Col key={`${index}-experience`} className="d-flex mb-2">
						<CardExperience key={index} experience={experience} />
					</Col>
				))}
			</Row>
		</>
	);
};
