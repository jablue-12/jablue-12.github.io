import { CardExperience } from './CardExperience';
import { Col, Row } from 'react-bootstrap';

export const Experience = () => {
	return (
		<>
			<h2 id="experience" className="mt-2 pt-2">Experience</h2>
			<Row>
				<Col>
					<CardExperience />
				</Col>
			</Row>
		</>
	);
};
