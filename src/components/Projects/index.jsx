import { Projects } from '../../data/constants';
import { CardProject } from './CardProject';
import { Col, Row } from 'react-bootstrap';

export const Project = () => {
	return (
		<>
			<h2 id="projects" className="mt-2 pt-2">Projects</h2>
			<Row>
				{Projects.map((project, index) => (
					<Col key={`${index}-project`}>
						<CardProject key={index} project={project} />
					</Col>
				))}
			</Row>
		</>
	);
};
