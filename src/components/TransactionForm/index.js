import React, { useState } from 'react'
import { uniqueId } from '../../utils'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import Grid from '@material-ui/core/Grid'
import {
	MuiPickersUtilsProvider,
	DatePicker,
	TimePicker,
} from '@material-ui/pickers'
//Dialog
import { withStyles } from '@material-ui/core/styles'
import {
	Dialog,
	DialogTitle,
	DialogContent,
	IconButton,
	Typography,
	Button,
} from '@material-ui/core'
import { Close, Add, Remove, PhotoCamera } from '@material-ui/icons'
import { StylesProvider } from '@material-ui/core/styles'
import {
	SearchButtonContainer,
	SearchBar,
	DatePickerContainerFlex,
	DatePickerContainer,
	DatePickerPlaceholder,
	StyledButton,
	CashInButton,
	CashOutButton,
	Form,
	Label,
	Input,
	Placeholder,
} from './index.style'
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

const MuiDialogTitle = withStyles(styles)(props => {
	const { children, classes, onClose, ...other } = props
	return (
		<DialogTitle disableTypography className={classes.root} {...other}>
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
		</DialogTitle>
	)
})

const MuiDialogContent = withStyles(theme => ({
	root: {
		padding: theme.spacing(2),
	},
}))(DialogContent)

const Index = ({ onNewTransaction }) => {
	const [enteredDate, setEnteredDate] = useState(new Date())
	const [enteredTime, setEnteredTime] = useState(new Date())

	const [nameValue, setNameValue] = useState('')
	const [amountValue, setAmountValue] = useState('')

	let dateNow = enteredDate.toLocaleDateString()
	// alert(dateNow)

	const addTransaction = (type, evt) => {
		evt.preventDefault()

		let month = enteredDate.toLocaleString('en-US', { month: 'long' })
		let day = enteredDate.toLocaleString('en-US', { day: '2-digit' })
		let year = enteredDate.getFullYear()

		let hr = enteredTime.getHours()
		let min = enteredTime.getMinutes()

		const time = () => {
			if (min < 10) {
				min = '0' + min
			}

			let ampm = 'AM'
			if (hr > 12) {
				hr -= 12
				ampm = 'PM'
			}

			if (hr === 0) {
				hr = 12
			}

			if (hr < 10) {
				hr = '0' + hr
			}

			return `${hr}:${min} ${ampm}`
		}

		const date = () => {
			if (enteredDate.toLocaleDateString() === dateNow) {
				// return 'Today'
				return `${day}, ${month} ${year}`
			} else {
				return `${day}, ${month} ${year}`
			}
		}

		const data = {
			id: uniqueId(),
			name: nameValue,
			amount: parseInt(amountValue),
			day: day,
			month: month,
			year: year,
			date: date(),
			time: time(),
			type: type,
		}

		onNewTransaction(data)

		setNameValue('')
		setAmountValue('')
	}

	//Dialog
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const nameChangeHandler = e => {
		setNameValue(e.target.value)
	}

	const amountChangeHandler = e => {
		setAmountValue(e.target.value)
	}

	const dateChangeHandler = e => {
		setEnteredDate(e)
	}

	const timeChangeHandler = e => {
		setEnteredTime(e)
	}

	const cashOutHandler = e => {
		e.preventDefault()

		setOpen(false)
		if (amountValue.trim('').length !== 0 && nameValue.trim().length !== 0) {
			addTransaction('expense', e)
		} else if (amountValue.trim('').length === 0) {
			alert('Please fill up the amount')
			setOpen(true)
		} else if (nameValue.trim().length === 0) {
			alert('Please fill up the remarks')
			setOpen(true)
		}
	}

	const cashInHandler = e => {
		e.preventDefault()

		setOpen(false)

		if (amountValue.trim('').length !== 0 && nameValue.trim().length !== 0) {
			addTransaction('income', e)
		} else if (amountValue.trim('').length === 0) {
			alert('Please fill up the amount')
			setOpen(true)
		} else if (nameValue.trim().length === 0) {
			alert('Please fill up the remarks')
			setOpen(true)
		}
	}

	return (
		<StylesProvider injectFirst>
			<SearchButtonContainer>
				<SearchBar placeholder='Search by remarks' />
				<StyledButton onClick={handleClickOpen}>New Transaction</StyledButton>
			</SearchButtonContainer>

			<Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
				maxWidth='xs'
			>
				<MuiDialogTitle id='customized-dialog-title' onClose={handleClose}>
					New Transaction
				</MuiDialogTitle>
				<MuiDialogContent dividers>
					<Form>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid container justify='space-around'>
								<DatePickerContainerFlex>
									<DatePickerContainer>
										<DatePicker
											variant='inline'
											autoOk
											inputVariant='outlined'
											value={enteredDate}
											onChange={dateChangeHandler}
											required
											style={{ width: '99.5%' }}
										/>
										<DatePickerPlaceholder>Date</DatePickerPlaceholder>
									</DatePickerContainer>

									<DatePickerContainer>
										<TimePicker
											variant='inline'
											autoOk
											inputVariant='outlined'
											value={enteredTime}
											onChange={timeChangeHandler}
											required
											style={{ width: '99.5%' }}
										/>
										<DatePickerPlaceholder>Time</DatePickerPlaceholder>
									</DatePickerContainer>
								</DatePickerContainerFlex>
							</Grid>
						</MuiPickersUtilsProvider>
						<Label>
							<Input
								type='number'
								placeholder='Enter amount'
								min='0.01'
								step='0.01'
								value={amountValue}
								onChange={amountChangeHandler}
								required
							/>
							<Placeholder>Amount</Placeholder>
						</Label>

						<Label>
							<Input
								type='text'
								placeholder='Enter details (Name, Bill No, Item Name, Quantity etc.)'
								value={nameValue}
								onChange={nameChangeHandler}
								required
							/>
							<Placeholder>Remarks</Placeholder>
						</Label>
						<Label>
							<Button variant='outlined'>
								{' '}
								<PhotoCamera />
								Attach Bill
							</Button>
						</Label>
					</Form>
				</MuiDialogContent>
				<DialogContent>
					<Grid container justify='space-around'>
						<CashInButton
							style={{ width: '51%' }}
							id='cashin-button'
							onClick={cashInHandler}
							type='submit'
						>
							<Add /> Cash in
						</CashInButton>
						<CashOutButton
							style={{ width: '51%' }}
							id='cashout-button'
							onClick={cashOutHandler}
							type='submit'
						>
							<Remove /> Cash out
						</CashOutButton>
					</Grid>
				</DialogContent>
			</Dialog>
		</StylesProvider>
	)
}

export default Index
