import Button from '@material-ui/core/Button'
import styled from 'styled-components'

export const SearchButtonContainer = styled.div`
	padding-top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const SearchBar = styled.input`
	border-radius: 5px;
	font-size: 1rem;
	width: 50%;
	color: ${props => props.theme.text};
	height: 2.5rem;
	padding-left: 0.5rem;
	background-color: transparent;
	transition: all 0.5s ease;
	outline: none;
	border: 1px solid ${props => props.theme.borderColor};

	@media(max-width: 576px) {
		width: 49%;
	}
`

export const StyledButton = styled(Button)`
	background-color: #6772e5;
	color: #fff;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	padding: 7px 14px;
	&:hover {
		background-color: #5469d4;
	}
`

export const CashInButton = styled(Button)`
	background-color: #3ab98d;
	border-color: #3ab98d;
	color: white;
`

export const CashOutButton = styled(Button)`
	background-color: #cb4545;
	border-color: #cb4545;
	color: white;
`
