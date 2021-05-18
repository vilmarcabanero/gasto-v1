import React from 'react'

function TransactionHistory({ transactions, onDeleteTransaction }) {
	return (
		<div>
			<h2>Transaction History</h2>
			<ul className='transactions'>
				{transactions.map(data => (
					<li key={data.id}>
						
            <div><span>Date here</span></div>
            <div><span>Time here</span></div>
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
