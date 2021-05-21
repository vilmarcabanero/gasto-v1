import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import * as S from './index.style'

import { moneyFormatter } from './helpers'

const TransactionHistory = ({ transactions, onDeleteTransaction }) => {
	return (
		<StylesProvider injectFirst>
			<S.Container>
				<S.HeaderRow>
					<S.HeaderCells> Date </S.HeaderCells>
					<S.HeaderCells> Time </S.HeaderCells>
					<S.HeaderCells> Remark </S.HeaderCells>
					<S.HeaderCells> Amount </S.HeaderCells>
					<S.HeaderCells> </S.HeaderCells>
					<S.HeaderCells> </S.HeaderCells>
				</S.HeaderRow>
				{transactions.map(data => (
					<S.BodyRow key={data.id}>
						<S.Data>{data.date}</S.Data>
						<S.Data>{data.time}</S.Data>
						<S.Data>{data.name}</S.Data>
						<S.Data className={data.type === 'expense' ? 'expense' : 'income'}>
							{moneyFormatter(data.amount)}
						</S.Data>

						<S.Data>
							<S.IconContainer className='hide'>
								<S.EditIcon />
							</S.IconContainer>
						</S.Data>
						<S.Data>
							<S.IconContainer
								className='hide'
								onClick={() => onDeleteTransaction(data.id)}
							>
								<S.DeleteIcon />
							</S.IconContainer>
						</S.Data>
					</S.BodyRow>
				))}
			</S.Container>
		</StylesProvider>
	)
}

export default TransactionHistory
