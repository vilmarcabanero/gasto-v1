import styled from 'styled-components'

export const StyledContainer = styled.div`
	position: absolute;
	left: 250px;
	top: 4rem;
	width: calc(100% - 250px);
	color: black;

	/* background-color: rgba(0, 0, 0, 0.7); */
	/* background-color: ${props => props.theme.headerBackground}; */

	transition: all ease-in-out 0.5s;
	transition: all 0.5s;

	/* @media (max-width: 992px) {
		//xl 1199px, 992 lg
		left: -330px;
	} */

	@media (max-width: 992px) {
		left: 0;
		width: 100%;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
