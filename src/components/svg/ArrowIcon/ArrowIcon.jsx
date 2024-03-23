import PropTypes from "prop-types";

const ArrowIcon = ({ width, height }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.95929 0H24V21.0406H17.5259V11.052L4.57781 24L0 19.4222L12.9481 6.47402H2.95929V0Z"
			/>
		</svg>
	);
};

ArrowIcon.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

export { ArrowIcon };
