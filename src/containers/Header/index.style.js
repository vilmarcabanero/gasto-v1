import styled from 'styled-components'

export const Container = styled.div`
	bottom: 0;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 4rem;
	color: ${props => props.theme.titleColor};
	z-index: 9999;
	border-radius: 5px;
	box-shadow: 0px 1px 7px 3px ${props => props.theme.boxShadowColor};
	background-color: ${props => props.theme.headerBackground};

	transition: all 0.5s ease;

	@media (max-width: 992px) {
		height: 3rem;
	}

	h1 {
		margin: 0;
		margin-top: 0.5rem;
		margin-left: 1rem;
		@media (max-width: 992px) {
			margin: 0;
		}
	}
`
