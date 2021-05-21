import * as S from './index.style'

//Money formatter function
const moneyFormatter = num => {
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
		<S.Container>
			<S.IncomeContainer>
				<S.Title>
					<S.PlusIcon />
					Cash In
				</S.Title>

				<S.Amount>{moneyFormatter(income)} </S.Amount>
			</S.IncomeContainer>
			<S.ExpenseContainer>
				<S.Title>
					<S.MinusIcon />
					Cash out
				</S.Title>
				<S.Amount> {moneyFormatter(expense)} </S.Amount>
			</S.ExpenseContainer>
			<S.BalanceContainer>
				<S.Title>
					<S.EqualsIcon />
					Balance
				</S.Title>
				<S.Amount>
					{income - expense < 0
						? `- ${moneyFormatter(income - expense)}`
						: moneyFormatter(income - expense)}
				</S.Amount>
			</S.BalanceContainer>
		</S.Container>
	)
}

export default Index
