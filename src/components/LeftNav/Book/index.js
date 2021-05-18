import React from 'react'
import {
	Styled,
	Container,
	BookIconContainer,
	Title,
	BookIcon,
	BookContainer,
	DateCreated,
} from './index.style'

const Index = () => {
	return (
		<Styled >
			<Container className='active'>
				<BookIconContainer>
					<BookIcon />
				</BookIconContainer>
				<BookContainer>
					<Title>Vil</Title>
					<DateCreated>Created at 05/18/2021</DateCreated>
				</BookContainer>
			</Container>
		</Styled>
	)
}

export default Index
