import { Col, Row } from 'react-bootstrap';
import { Education as EducationData } from '../../data/constants';

export const Education = () => {
	return (
		<>
			<h2 id="education" className="mt-2 pt-2">
				Education
			</h2>
			<Row>
				<Col>
					<h3>{EducationData.institution}</h3>
				</Col>
			</Row>
		</>
	);
};
