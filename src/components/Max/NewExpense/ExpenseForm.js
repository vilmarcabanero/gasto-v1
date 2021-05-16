import React, { useState } from 'react'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import Grid from '@material-ui/core/Grid'
import {
	MuiPickersUtilsProvider,
	DatePicker,
	TimePicker,
} from '@material-ui/pickers'
import './ExpenseForm.css'

let currentBalance = 0
let currentIncome = 0
let currentExpense = 0

const ExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState(new Date())

	const [enteredTime, setEnteredTime] = useState(new Date())

	const [balance, setBalance] = useState(0)
	const [income, setIncome] = useState(0)
	const [expense, setExpense] = useState(0)

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// })

	const titleChangeHandler = event => {
		setEnteredTitle(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// })

		// setUserInput(prevState => {
		// 	return { ...prevState, enteredTitle: event.target.value }
		// })
	}

	const amountChangeHandler = event => {
		setEnteredAmount(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// })
	}

	const dateChangeHandler = event => {
		// setEnteredDate(event.target.value)
		setEnteredDate(event)
	}

	const timeChangeHandler = event => {
		// setEnteredDate(event.target.value)
		setEnteredTime(event)
	}

	// const submitHandler = event => {
	// 	event.preventDefault()

	// 	const expenseData = {
	// 		title: enteredTitle,
	// 		amount: +enteredAmount,
	// 		date: new Date(enteredDate),
	// 		time: new Date(enteredTime),
	// 	}

	// 	props.onSaveExpenseData(expenseData)
	// 	setEnteredTitle('')
	// 	setEnteredAmount('')
	// 	setEnteredDate('')
	// 	setEnteredTime('')
	// }

	const cashOutHandler = event => {
		event.preventDefault()

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
			time: new Date(enteredTime),
			currentBalance: currentBalance,
		}

		if (balance === 0) {
			setBalance('')
		}

		if (expense === 0) {
			setExpense('')
		}

		currentExpense += +enteredAmount
		currentBalance -= +enteredAmount

		setBalance(currentBalance)
		setExpense(currentExpense)

		props.onSaveExpenseData(expenseData)
		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate(new Date())
		setEnteredTime(new Date())
	}

	const cashInHandler = event => {
		event.preventDefault()

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
			time: new Date(enteredTime),
		}

		if (balance === 0) {
			setBalance('')
		}

		if (income === 0) {
			setIncome('')
		}

		currentBalance += +enteredAmount
		currentIncome += +enteredAmount

		setBalance(currentBalance)
		setIncome(currentIncome)

		props.onSaveExpenseData(expenseData)
		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate(new Date())
		setEnteredTime(new Date())
	}

	return (
		// <form onSubmit={submitHandler}>
		<form>
			<h3>Balance: {balance}</h3>
			<h3 className='income'>Income: {income}</h3>
			<h3 className='expense'>Expense: {expense}</h3>
			<h3 className='title'>New Transaction</h3>
			<span className='close' onClick={props.onCancel}>
				x
			</span>
			<div className='new-expense__controls'>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<Grid container justify='space-around'>
						<div className='datepicker-container-flex'>
							<div className='datepicker-container'>
								<DatePicker
									variant='inline'
									autoOk
									inputVariant='outlined'
									value={enteredDate}
									onChange={dateChangeHandler}
									required
									style={{ width: '99.5%' }}
								/>
								<span className='datepicker-placeholder'>Date</span>
							</div>

							<div className='datepicker-container'>
								<TimePicker
									variant='inline'
									autoOk
									inputVariant='outlined'
									value={enteredTime}
									onChange={timeChangeHandler}
									required
									style={{ width: '99.5%' }}
								/>
								<span className='datepicker-placeholder'>Time</span>
							</div>
						</div>
					</Grid>
				</MuiPickersUtilsProvider>
				<div className='new-expense__control'>
					<label className='label'>
						<input
							id='input1'
							type='number'
							value={enteredAmount}
							min='0.01'
							step='0.01'
							onChange={amountChangeHandler}
							required
						/>
						<span className='placeholder'>Amount</span>
					</label>
				</div>

				<div className='new-expense__control'>
					<label className='label'>
						<input
							id='input2'
							type='text'
							value={enteredTitle}
							onChange={titleChangeHandler}
							required
						/>
						<span className='placeholder'>Remarks</span>
					</label>
				</div>
			</div>
			<div className='new-expense__actions'>
				{/* <button type='button' onClick={props.onCancel}>
					Cancel
				</button> */}
				<button id='cashin-button' onClick={cashInHandler}>
					{' '}
					+ Cash in
				</button>
				<button id='cashout-button' onClick={cashOutHandler}>
					- Cash out
				</button>
			</div>
		</form>
	)
}

export default ExpenseForm
