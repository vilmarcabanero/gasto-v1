import styled from 'styled-components'
import { Book } from '@material-ui/icons'

export const Styled = styled.div`
	.active {
		background-color: ${props => props.theme.bookBackground};
		box-shadow: 2px 2px 4px ${props => props.theme.boxShadowColor};
	}
`

export const Container = styled.div`
	display: grid;
	grid-template-columns: 17% 83%;
	justify-content: flex-start;
	align-items: center;
	margin-top: 1rem;
	padding: 0.5rem 0.25rem 0.5rem 0.25rem;
	border-radius: 5px;
`
export const BookContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`

export const Title = styled.span`
	font-size: 15px;
`

export const DateCreated = styled.span`
	font-size: 12px;
`

export const BookIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	border-radius: 5px;
	width: 2rem;
	height: 2rem;
`

export const BookIcon = styled(Book)`
	color: white;
`
