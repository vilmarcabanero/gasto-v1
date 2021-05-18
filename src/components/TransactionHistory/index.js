import React from 'react'

function TransactionHistory({ transactions, onDeleteTransaction }) {
	// const month = props.date.toLocaleString('en-US', { month: 'long' }) + ' '
	// const day = props.date.toLocaleString('en-US', { day: '2-digit' }) + ', '
	// const year = props.date.getFullYear()

	return (
		<div>
			<h2>Transaction History</h2>
			<ul className='transactions'>
				{transactions.map(data => (
					<li key={data.id}>
						<div>{data.date}</div>
						<div>
							<span>{`${data.time}`}</span>
						</div>

						<div>{data.name}</div>
						<div>
							<span>${data.amount}</span>

							<button onClick={() => onDeleteTransaction(data.id)}>x</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TransactionHistory
