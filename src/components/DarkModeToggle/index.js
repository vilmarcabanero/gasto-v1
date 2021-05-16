import { Button } from './index.style'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

const DarkModeToggleButton = ({ theme, toggleTheme }) => {
	const icon =
		theme === 'light' ? (
			<CgSun className='toggle' />
		) : (
			<HiMoon className='toggle' />
		)

	return <Button onClick={toggleTheme}>{icon}</Button>
}

export default DarkModeToggleButton
