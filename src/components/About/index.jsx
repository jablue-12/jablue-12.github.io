import { Col, Image, Row } from 'react-bootstrap';
import { Bio } from '../../data/constants';

export const About = () => {
	return (
		<Row className="mt-5 pt-5 justify-content-center">
			<Col md="auto" className="mb-3">
				<Image roundedCircle src={Bio.avatar} alt="jared-avatar" />
				<Row className="my-5 px-5">
					<a
						className="btn btn-outline-primary rounded-3"
						href={Bio.resume}
						target="_blank"
						rel="noopener noreferrer">
							View Resume
					</a>
				</Row>
			</Col>
			<Col className="p-5">
				<p style={{ fontSize: '4rem' }} className="text-danger">Greetings! 👋 </p>
				<p style={{ fontSize: '1.5rem' }} className="fst-italic text-info">{Bio.description}</p>
			</Col>
		</Row>
	);
};
