import styled from 'styled-components'

export const Button = styled.button`
	position: absolute;
	top: 12px;
	right: 12px;
	cursor: pointer;
	height: 40px;
	width: 40px;

	border-radius: 50%;
	border: none;
	z-index: 9999;
	background-color: ${props => props.theme.toggleColor};
	transition: all 0.5s ease;
	color: white;
	box-shadow: 0px 1px 7px 3px white;
	&:focus {
		outline: none;
	}
	transition: all 0.5s ease;

	.toggle {
		width: 30px;
		height: 30px;
	}

	@media (min-width: 1200px) {
	}

	@media (max-width: 992px) {
		//xl 1200px, 992 lg
		top: 6px;
		right: 6px;
		height: 35px;
		width: 35px;

		.toggle {
			width: 25px;
			height: 25px;
		}
	}
`
