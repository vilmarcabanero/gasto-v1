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
import {
	Dialog,
	DialogTitle,
	DialogContent,
	IconButton,
	Typography,
	Button
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
				maxWidth='xs'
			>
				<MuiDialogTitle id='customized-dialog-title' onClose={handleClose}>
					New Transaction
				</MuiDialogTitle>
				<MuiDialogContent dividers>
					<Form>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid container justify='space-around' >
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
								value={enteredAmount}
								min='0.01'
								step='0.01'
								onChange={amountChangeHandler}
								required
							/>
							<Placeholder>Amount</Placeholder>
						</Label>

						<Label>
							<Input
								type='text'
								placeholder='Enter details (Name, Bill No, Item Name, Quantity etc.)'
								value={enteredTitle}
								onChange={titleChangeHandler}
								required
							/>
							<Placeholder>Remarks</Placeholder>
						</Label>
						<Label>
							<Button variant='outlined'> <PhotoCamera/>Attach Bill</Button>
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
