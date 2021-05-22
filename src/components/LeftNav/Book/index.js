import * as S from './index.style'

const Index = () => {
	return (
		<S.Styled>
			<S.Container className='active'>
				<S.BookIconContainer>
					<S.BookIcon />
				</S.BookIconContainer>
				<S.BookContainer>
					<S.Title>Book 1</S.Title>
					<S.DateCreated>Created at 05/18/2021</S.DateCreated>
				</S.BookContainer>
			</S.Container>
		</S.Styled>
	)
}

export default Index
