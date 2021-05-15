import styled from 'styled-components'

export const StyledContainer = styled.div`
	position: absolute;
	left: 250px;
	top: 4rem;
	width: calc(100% - 250px);
	color: black;
	padding: 1rem;
	height: 90vh;
	overflow-y: auto;


	transition: all ease-in-out 0.5s;
	transition: all 0.5s;

	@media (max-width: 992px) {
		left: 0;
		width: 100%;
	}
`
