import React from 'react'
import styled from 'styled-components'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
// import 'date-fns'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import Grid from '@material-ui/core/Grid'
import DeleteIcon from '@material-ui/icons/Delete'

import Button from '@material-ui/core/Button'
import { StylesProvider } from '@material-ui/core/styles'

import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
	DatePicker,
} from '@material-ui/pickers'

const Text = styled.p`
	/* transition: all 0.5s ease; */
`



const Dummy = () => {
	const dateValue = new Date()
	const startDate = new Date('2019-01-01')
	const endDate = new Date('2022-12-31')

	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState(new Date())

	const handleDateChange = date => {
		setSelectedDate(date)
	}

	return (
		<StylesProvider injectFirst>
			<DatePickerComponent
				placeholder={'Enter Date'}
				value={dateValue}
				min={startDate}
				max={endDate}
				format='dd-MMM-yy'
			></DatePickerComponent>
			<br></br>

			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid container justify='space-around'>
					<StyledDatePicker
						inputVariant='outlined'
						value={selectedDate}
						onChange={handleDateChange}
						required
					/>
				</Grid>
			</MuiPickersUtilsProvider>

			<Text>
				<StyledDelete />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
				<StyledButton>Styled Button</StyledButton>
				<StyledButton2>Styled Button 2</StyledButton2>
			</Text>
		</StylesProvider>
	)
}

const StyledButton = styled(Button)`
	background-color: #6772e5;
	color: #fff;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	padding: 7px 14px;
	&:hover {
		background-color: #5469d4;
	}
`

const StyledButton2 = styled(Button)`
	background-color: #6772e5;
	color: #fff;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	padding: 7px 14px;
	&:hover {
		background-color: #5469d4;
	}
`

const StyledDelete = styled(DeleteIcon)`
	color: ${props => props.theme.text} !important;
	transition: all 1s ease !important;
`
const StyledDatePicker = styled(DatePicker)`
	color: ${props => props.theme.text} !important;
`
export default Dummy
