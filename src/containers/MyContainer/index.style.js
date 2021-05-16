import styled from 'styled-components'

export const StyledContainer = styled.div`
	position: absolute;
	left: 253px;
	top: 4.125rem;
	width: calc(100% - 253px);
	color: ${props => props.theme.text};
	background-color: ${props => props.theme.containerColorLighter};
	box-shadow: 0px 1px 10px 3px ${props => props.theme.boxShadowColor};
	border-radius: 5px;
	/* z-index: 9999; */


	padding: 1rem;
	height: calc(100vh - 4.125rem);
	overflow-y: auto;

	transition: all 0.5s ease;

	@media (max-width: 992px) {
		left: 0;
		top: 3.125rem;
		height: calc(100vh - 3.125rem);
		width: 100%;
	}
`
export const Text = styled.h1`
	position: sticky;
	top: -1rem;
	background-color: gray;
	border-radius: 5px;
	padding: 3px;
	text-align: center;
`