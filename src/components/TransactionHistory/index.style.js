import styled from 'styled-components'
import { Delete, Edit } from '@material-ui/icons'
export const Container = styled.table`
	margin: 2.5rem 0;
	width: 100%;
  position: relative;
	.hide {
		visibility: hidden;
	}
`

export const Header = styled.thead``

export const HeaderRow = styled.div`
	width: 100%;
	display: grid;
	align-items: center;
	justify-content: flex-start;
	padding-right: 1rem;
	grid-template-columns: 15% 12% 45% 18% 5% 5%;
	background-color: ${props => props.theme.highlightColor};
	color: ${props => props.theme.text};
	text-align: left;
	font-weight: bold;
	font-size: 16px;
  position: sticky;
  top: -1rem;

	@media (max-width: 576px) {
		font-size: 14px;
	}
`

export const HeaderCells = styled.div`
	padding: 10px 16px;
`

export const Body = styled.tbody``

export const BodyRow = styled.div`
	width: 100%;
	display: grid;
	align-items: center;
	justify-content: flex-start;
	padding-right: 1rem;
	grid-template-columns: 15% 12% 45% 18% 5% 5%;
	color: ${props => props.theme.text};
	&:hover,
	&:active {
		background-color: ${props => props.theme.highlightColor};
		.hide {
			visibility: visible;
		}
	}

	&:active {
		background-color: ${props => props.theme.highlightColor};
		.hide {
			visibility: visible;
		}
	}
`

export const Data = styled.div`
	padding: 16px;
	font-size: 17px;
	color: ${props => props.theme.text};

	@media (max-width: 576px) {
		font-size: 15px;
	}
`

export const IconContainer = styled.div`
	width: 2.5rem;
	height: 2.5em;
	border-radius: 50%;
	padding: 0.25rem;
	margin: 2px;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
		background-color: ${props => props.theme.hoverHighlightColor};
	}
`

export const DeleteIcon = styled(Delete)`
	color: #e74c3c;
`

export const EditIcon = styled(Edit)`
	color: #e74c3c;
`
