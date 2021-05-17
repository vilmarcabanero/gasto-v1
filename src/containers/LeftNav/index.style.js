import styled from 'styled-components'

export const Container = styled.div`
	/* position: fixed;
	width: 300px;
	left: 0;
	top: 0;
	bottom: 0; */
	position: absolute;
	height: calc(100vh - 4rem);
	left: 0;
	top: 4rem;
	width: 250px;
	color: white;
	padding: 1rem;
	/* background-color: rgba(0, 0, 0, 0.7); */
	/* background-color: ${props => props.theme.headerBackground}; */
	background-color: ${props => props.theme.navBackground};
	box-shadow: 2px 2px 4px ${props => props.theme.boxShadowColor};
	/* border-radius: 5px; */

	transition: all ease-in-out 0.5s;
	transition: all 0.5s;

	@media (max-width: 992px) {
		//xl 1199px, 992 lg
		left: -330px;
	}
`
export const Title = styled.h1`
	font-size: 20px;
`
