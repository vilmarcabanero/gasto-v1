import React, { useState, useEffect } from 'react'
import Expense from 'components/Expense'
import TransactionHistory from 'components/TransactionHistory'
import TransactionForm from 'components/TransactionForm'

const Gasto = () => {
	const [income, setIncome] = useState(0)
	const [expense, setExpense] = useState(0)
	const [transactions, setTransactions] = useState([])

	const saveState = () => {
		localStorage.setItem('expenseTrackerState', JSON.stringify(transactions))
	}

	const calculateExpenses = () => {
		let income = 0,
			expense = 0

		transactions.forEach(data => {
			if (data.type === 'income') {
				income += data.amount
			} else if (data.type === 'expense') {
				expense += data.amount
			}
		})

		saveState()

		setIncome(income)
		setExpense(expense)
	}

	const handleAddNewTransaction = item => {
		let newTransactions = [item, ...transactions]
		setTransactions(newTransactions)
	}

	const handleDeleteTransaction = id => {
		const newTransactions = transactions.filter(item => item.id !== id)
		setTransactions(newTransactions)
	}

	useEffect(() => {
		let localState = JSON.parse(localStorage.getItem('expenseTrackerState'))
		if (localState) {
			setTransactions(localState)
		} else {
			calculateExpenses()
		} // eslint-disable-next-line
	}, [])

	useEffect(() => {
		calculateExpenses() // eslint-disable-next-line
	}, [transactions])

	return (
		<div>
			<h1>Book 1</h1>
			<TransactionForm onNewTransaction={handleAddNewTransaction} />
			<Expense income={income} expense={expense} />
			<TransactionHistory
				income={income}
				expense={expense}
				transactions={transactions}
				onDeleteTransaction={handleDeleteTransaction}
			/>
		</div>
	)
}

export default Gasto
