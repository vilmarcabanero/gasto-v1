import styled from 'styled-components'

export const Container = styled.div`
	bottom: 0; 
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 4rem;
	color: white;
	z-index: 9999;
	background-color: steelblue;
	

	transition: all ease-in-out 0.5s;
	transition: all 0.5s;

	@media (max-width: 992px) {
		
	}

	h1 {
		margin: 0;
		margin-top: 0.5rem;
		margin-left: 1rem;
	}
`
