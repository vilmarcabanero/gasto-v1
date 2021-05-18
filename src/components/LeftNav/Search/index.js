import React from 'react'
import {Container, AddBookContainer, AddBookIcon, Search} from './index.style'

const Index = () => {
  return (
    <Container>
      <Search placeholder='Search book'/>
      <AddBookContainer>
        <AddBookIcon/>
      </AddBookContainer>
    </Container>
  )
}

export default Index
