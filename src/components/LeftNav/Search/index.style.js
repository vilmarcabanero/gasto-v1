import styled from 'styled-components'
import { Add } from '@material-ui/icons'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 81% auto;
  justify-content: flex-start;
  align-items: center;

`

export const Search = styled.input`
border-radius: 5px;
font-size: 1rem;
color: white;
height: 2.5rem;
margin: 0.5rem;
margin-left: 0;
padding: 0.5rem;
background-color: ${props => props.theme.navSearchBackground};
transition: all 0.5s ease;
outline: none;

@media (max-width: 576px) {
  width: 49%;
}
`

export const AddBookContainer = styled.div`
display: flex;
justify-content: center;
align-items:center;
border-radius: 5px;
width: 2.5rem;
height: 2.5rem;
background-color: ${props => props.theme.navSearchBackground};

&:hover {
  cursor: pointer;
}
`

export const AddBookIcon = styled(Add)`
  color: white;
`
