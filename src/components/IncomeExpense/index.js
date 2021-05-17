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

const index = () => {
	return (
		<Container>
			<IncomeContainer>
				<Title>
					<PlusIcon />
					Income
				</Title>

				<Amount>0.00 </Amount>
			</IncomeContainer>
			<ExpenseContainer>
				<Title>
					<MinusIcon />
					Expense
				</Title>
				<Amount> 0.00 </Amount>
			</ExpenseContainer>
			<BalanceContainer>
				<Title><EqualsIcon/>
					Balance
          
				</Title>
				<Amount>0.00</Amount>
			</BalanceContainer>
		</Container>
	)
}

export default index
