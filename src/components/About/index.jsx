import { Col, Row } from "react-bootstrap";
import { Bio } from '../../data/constants';

export const About = () => {
	return (
		<div id="about" className="mt-5 pt-5">
			<Row className="mt-2">
				<Col>
					<p style={{ fontSize: '4rem' }}>Greetings! 👋 </p>
					<p style={{ fontSize: '1.5rem' }}>{Bio.description}</p>
				</Col>
				<Col md={5}>
					<h3>{Bio.name}</h3>
				</Col>
			</Row>
		</div>
	);
};
