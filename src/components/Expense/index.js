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
import { moneyFormatter } from '../../utils/math'

const Index = ({ income, expense }) => {
	return (
		<Container>
			<IncomeContainer>
				<Title>
					<PlusIcon />
					Cash In
				</Title>

				<Amount>{moneyFormatter(income)} </Amount>
			</IncomeContainer>
			<ExpenseContainer>
				<Title>
					<MinusIcon />
					Cash out
				</Title>
				<Amount> {moneyFormatter(expense)} </Amount>
			</ExpenseContainer>
			<BalanceContainer>
				<Title>
					<EqualsIcon />
					Balance
				</Title>
				<Amount>
					{income - expense < 0
						? `- ${moneyFormatter(income - expense)}`
						: moneyFormatter(income - expense)}
				</Amount>
			</BalanceContainer>
		</Container>
	)
}

export default Index
