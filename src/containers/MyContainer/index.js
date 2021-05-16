import { StyledContainer, Text } from './index.style'
import { Container } from '@material-ui/core'
import Dummy from '../../components/Dummy'

const MyContainer = () => {
	return (
		
			<Container>
				<StyledContainer>
					<h1>
						This is my container for the contents.
					</h1>
				<Text>This is a sticky container for the contents.</Text>
				<Dummy />
				</StyledContainer>
			</Container>
	)
}

export default MyContainer
