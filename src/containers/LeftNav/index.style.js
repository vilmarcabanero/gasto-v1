import styled from 'styled-components'

export const Container = styled.div`
	/* position: fixed;
	width: 300px;
	left: 0;
	top: 0;
	bottom: 0; */
	position: absolute;
	height: 100vh;
	left: 0;
	top: 0;
	width: 250px;
	color: white;
	padding: 1rem;
	padding-top: 4rem;
	/* background-color: rgba(0, 0, 0, 0.7); */
	/* background-color: ${props => props.theme.headerBackground}; */
	background-color: black;
	

	transition: all ease-in-out 0.5s;
	transition: all 0.5s;

	@media (max-width: 992px) {
		//xl 1199px, 992 lg
		left: -330px;
	}
`
