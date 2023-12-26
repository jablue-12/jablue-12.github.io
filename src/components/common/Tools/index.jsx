import { Badge, Stack } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Tools = ({ tools }) => {
	return (
		<Stack className="mb-3" direction="horizontal" gap={2}>
			{tools.map((tool, index) => (
				<Badge key={`${index}-tool-badge`} pill bg="info">{tool.name}</Badge>
			))}
		</Stack>
	);
};

Tools.propTypes = {
	tools: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
		})
	).isRequired,
};
