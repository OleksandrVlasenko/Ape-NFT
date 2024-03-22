import PropTypes from "prop-types";

const XIcon = ({ width, height }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 37 36"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M27.2502 10.8405L11.3403 26.7504L9.74928 25.1594L25.6592 9.24951L27.2502 10.8405Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.3408 9.24951L27.2507 25.1594L25.6597 26.7504L9.74983 10.8405L11.3408 9.24951Z"
			/>
		</svg>
	);
};

XIcon.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

export { XIcon };
