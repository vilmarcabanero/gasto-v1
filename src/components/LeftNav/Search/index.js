import * as S from './index.style'

const Index = () => {
	return (
		<S.Container>
			<S.Search placeholder='Search book' />
			<S.AddBookContainer>
				<S.AddBookIcon />
			</S.AddBookContainer>
		</S.Container>
	)
}

export default Index
