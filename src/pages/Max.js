import { useState } from 'react'
import { motion } from 'framer-motion'
import NewExpense from '../components/Max/NewExpense/NewExpense'
import Expenses from '../components/Max/Expenses/Expenses'

const MaxPage = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
	const addExpenseHandler = expense => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses]
		})
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</motion.div>
	)
}

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
]

export default MaxPage
