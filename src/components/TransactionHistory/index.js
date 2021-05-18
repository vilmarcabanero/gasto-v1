import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'

import {
	Container,
	HeaderRow,
	HeaderCells,
	BodyRow,
	Data,
	IconContainer,
	DeleteIcon,
	EditIcon,
} from './index.style'
import { moneyFormatter } from './helpers'

const TransactionHistory = ({ transactions, onDeleteTransaction }) => {
	return (
		<StylesProvider injectFirst>
			<Container>
				<HeaderRow>
					<HeaderCells> Date </HeaderCells>
					<HeaderCells> Time </HeaderCells>
					<HeaderCells> Remark </HeaderCells>
					<HeaderCells> Amount </HeaderCells>
					<HeaderCells> </HeaderCells>
					<HeaderCells> </HeaderCells>
				</HeaderRow>
				{transactions.map(data => (
					<BodyRow key={data.id}>
						<Data>{data.date}</Data>
						<Data>{data.time}</Data>
						<Data>{data.name}</Data>
						<Data className={data.type === 'expense' ? 'expense' : 'income'}>
							{moneyFormatter(data.amount)}
						</Data>

						<Data>
							<IconContainer className='hide'>
								<EditIcon />
							</IconContainer>
						</Data>
						<Data>
							<IconContainer
								className='hide'
								onClick={() => onDeleteTransaction(data.id)}
							>
								<DeleteIcon />
							</IconContainer>
						</Data>
					</BodyRow>
				))}
			</Container>
		</StylesProvider>
	)
}

export default TransactionHistory
