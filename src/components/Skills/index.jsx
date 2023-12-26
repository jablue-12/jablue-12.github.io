import { Col, Row } from 'react-bootstrap';
// import { Skills as SkillsData } from '../../data/constants';

export const Skills = () => {
	return (
		<>
			<h2 id="skills" className="mt-2 pt-2">
				Skills
			</h2>
			<Row>
				<Col>Frontend</Col>
			</Row>
			<Row>
				<Col>Backend</Col>
			</Row>
			<Row>
				<Col>Android</Col>
			</Row>
			<Row>
				<Col>Others</Col>
			</Row>
		</>
	);
};
