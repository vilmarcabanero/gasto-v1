import styled from 'styled-components'

export const StyledContainer = styled.div`
	position: absolute;
	left: 250px;
	top: 4rem;
	width: calc(100% - 250px);
	color: ${props => props.theme.text};
	background-color: ${props => props.theme.containerColorLighter};
	box-shadow: 2px 2px 4px ${props => props.theme.boxShadowColor};
	border-radius: 5px;
	/* z-index: 9999; */

	padding: 1rem;
	height: calc(100vh - 4rem);
	overflow-y: auto;

	transition: all 0.5s ease;

	@media (max-width: 992px) {
		left: 0;
		top: 3rem;
		height: calc(100vh - 3rem);
		width: 100%;
	}

	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: ${props => props.theme.scrollBarTrackColor};
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		/* background: #888; */
		background: ${props => props.theme.scrollBarColor};
		border-radius: 5px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		/* background: #555; */
		background: ${props => props.theme.scrollBarHoverColor};
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
