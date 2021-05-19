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
//Dialog
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import {Close, Add, Remove, Delete, Edit} from '@material-ui/icons'
// import AddIcon from '@material-ui/icons/Add'
// import RemoveIcon from '@material-ui/icons/Remove'
// import DeleteIcon from '@material-ui/icons/Delete'
// import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
})

const DialogTitle = withStyles(styles)(props => {
	const { children, classes, onClose, ...other } = props
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant='h6'>{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label='close'
					className={classes.closeButton}
					onClick={onClose}
				>
					<Close />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	)
})

const DialogContent = withStyles(theme => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent)

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

	//Dialog
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

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

		setOpen(false)
	}

	const cashInHandler = event => {
		event.preventDefault()

		if (enteredAmount.trim('').length === 0) {
			alert('Please fill up the amount')
		}

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

		setOpen(false)
	}

	return (
		// <form onSubmit={submitHandler}>
		<div>
			<Button variant='outlined' color='primary' onClick={handleClickOpen}>
				New Transaction
			</Button>

			<form>
				<h3>Balance: {balance}</h3>
				<h3 className='income'>Income: {income}</h3>
				<h3 className='expense'>Expense: {expense}</h3>
				<Delete style={{ color: '#E74C3C' }} />
				<Edit style={{ color: '#1976D2 ' }} />
			</form>

			<Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
			>
				<DialogTitle id='customized-dialog-title' onClose={handleClose}>
					New Transaction
				</DialogTitle>
				<DialogContent dividers>
					<form>
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
					</form>
				</DialogContent>
				<DialogContent>
					<Grid container justify='space-around'>
						<Button
							style={{ width: '49.5%' }}
							id='cashin-button'
							onClick={cashInHandler}
							type='submit'
						>
							<Add /> Cash in
						</Button>
						<Button
							style={{ width: '49.5%' }}
							id='cashout-button'
							onClick={cashOutHandler}
							type='submit'
						>
							<Remove /> Cash out
						</Button>
					</Grid>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default ExpenseForm
