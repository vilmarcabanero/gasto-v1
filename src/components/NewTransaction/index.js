import React, { useState } from 'react'
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
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import { Close, Add, Remove } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'
import { StylesProvider } from '@material-ui/core/styles'
import {
	SearchButtonContainer,
	SearchBar,
	StyledButton,
	CashInButton,
	CashOutButton,
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

const Index = props => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState(new Date())

	const [enteredTime, setEnteredTime] = useState(new Date())

	//Dialog
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const titleChangeHandler = event => {
		setEnteredTitle(event.target.value)
	}

	const amountChangeHandler = event => {
		setEnteredAmount(event.target.value)
	}

	const dateChangeHandler = event => {
		setEnteredDate(event)
	}

	const timeChangeHandler = event => {
		setEnteredTime(event)
	}

	const cashOutHandler = event => {
		event.preventDefault()

		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate(new Date())
		setEnteredTime(new Date())

		setOpen(false)
		if (enteredAmount.trim('').length === 0) {
			alert('Please fill up the amount')
			setOpen(true)
		}
	}

	const cashInHandler = event => {
		event.preventDefault()

		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate(new Date())
		setEnteredTime(new Date())

		setOpen(false)
		if (enteredAmount.trim('').length === 0) {
			alert('Please fill up the amount')
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
			>
				<DialogTitle id='customized-dialog-title' onClose={handleClose}>
					New Transaction
				</DialogTitle>
				<DialogContent dividers>
					<form>
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
					</form>
				</DialogContent>
				<DialogContent>
					<Grid container justify='space-around'>
						<CashInButton
							style={{ width: '49.5%' }}
							id='cashin-button'
							onClick={cashInHandler}
							type='submit'
						>
							<Add /> Cash in
						</CashInButton>
						<CashOutButton
							style={{ width: '49.5%' }}
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
