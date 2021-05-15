import { StyledContainer } from './index.style'
import { Container } from '@material-ui/core'
import Dummy from '../../components/Dummy'

const MyContainer = () => {
	return (
		
			<Container>
				<StyledContainer>
				<h1>This is my container for the contents.</h1>
				<Dummy />
				</StyledContainer>
			</Container>
	)
}

export default MyContainer
