import React, { useRef } from "react";
import ReactSlider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonContainer, SliderButton } from "./Slider.styled";

const Slider = ({ children }) => {
	const slider = useRef(null);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<>
			<ReactSlider ref={slider} {...settings}>
				{children}
			</ReactSlider>
			<ButtonContainer>
				<SliderButton type="button" onClick={() => slider?.current?.slickPrev()}>
					Prev
				</SliderButton>
				<SliderButton type="button" onClick={() => slider?.current?.slickNext()}>
					Next
				</SliderButton>
			</ButtonContainer>
		</>
	);
};

Slider.propTypes = {
	children: PropTypes.node,
};

export { Slider };
