import { StyledContainer } from './index.style'
import { Container } from '@material-ui/core'

const MyContainer = (props) => {
	return (
		
			<Container>
				<StyledContainer>
					{props.children}
				</StyledContainer>
			</Container>
	)
}

export default MyContainer
