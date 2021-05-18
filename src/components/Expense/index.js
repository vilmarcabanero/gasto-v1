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

//Money formatter function
function moneyFormatter(num) {
	let p = num.toFixed(2).split('.')
	return (
		'₱ ' +
		p[0]
			.split('')
			.reverse()
			.reduce(function (acc, num, i, orig) {
				return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc
			}, '') +
		'.' +
		p[1]
	)
}

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
