import React from 'react'
import {
	Container,
	IncomeContainer,
	ExpenseContainer,
	Title,
  Amount,
	BalanceContainer,
	PlusIcon,
	MinusIcon,
	EqualsIcon,
} from './index.style'

const Index = ({income, expense}) => {
	return (
		<Container>
			<IncomeContainer>
				<Title>
					<PlusIcon />
					Cash In
				</Title>

				<Amount>{income} </Amount>
			</IncomeContainer>
			<ExpenseContainer>
				<Title>
					<MinusIcon />
					Cash out
				</Title>
				<Amount> {expense} </Amount>
			</ExpenseContainer>
			<BalanceContainer>
				<Title><EqualsIcon/>
					Balance
          
				</Title>
				<Amount>{income - expense}</Amount>
			</BalanceContainer>
		</Container>
	)
}

export default Index
