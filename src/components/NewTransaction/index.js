import React from 'react'
import TransactionForm from './TransactionForm'

const Index = props => {
	const saveExpenseDataHandler = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}

		props.onAddExpense(expenseData)
	}

	return <TransactionForm onSaveExpenseData={saveExpenseDataHandler} />
}

export default Index
