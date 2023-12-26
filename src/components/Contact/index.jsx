import { Col, Row } from 'react-bootstrap';
import { Contact as ContactData } from '../../data/constants';

export const Contact = () => {
	return (
		<>
			<h2 id="contact" className="mt-2 pt-2">
				Contact
			</h2>
			<Row>
				<Col>
					<h3>{ContactData.email}</h3>
				</Col>
			</Row>
		</>
	);
};
