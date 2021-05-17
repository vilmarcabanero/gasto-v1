import React from 'react'
import styled from 'styled-components'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
// import 'date-fns'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import Grid from '@material-ui/core/Grid'
import DeleteIcon from '@material-ui/icons/Delete';

import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
	DatePicker
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
		<div>
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
					<DatePicker
					inputVariant='outlined'
						value={selectedDate}
						onChange={handleDateChange}
						required
					/>

				</Grid>
			</MuiPickersUtilsProvider>

			<Text>
				<DeleteIcon />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</Text>

			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</Text>
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</Text>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione
				repellat perspiciatis, delectus saepe rem vero cum eligendi eveniet quis
				eos earum neque, enim veniam quam, quod suscipit? Ea, dolor.
			</p>
		</div>
	)
}

export default Dummy
