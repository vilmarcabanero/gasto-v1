import { StyledContainer } from './index.style'
import { Container } from '@material-ui/core'

const MyContainer = () => {
	return (
		<StyledContainer>
				<Container className='container'>
					<h1>This is my container for the contents.</h1>
				</Container>
		</StyledContainer>
	)
}

export default MyContainer
