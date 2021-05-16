import { motion } from 'framer-motion'
import Main from '../containers/Main'
import LeftNav from '../containers/LeftNav'
import Header from '../containers/Header'
import MyContainer from '../containers/MyContainer'
import Background from '../containers/Background'
import DarkModeToggle from '../components/DarkModeToggle'
import { useDarkMode } from '../components/DarkMode/useDarkMode'
import { lightTheme, darkTheme } from '../components/DarkMode/Themes'
import { ThemeProvider } from 'styled-components'
const MainPage = () => {
	const [theme, themeToggler, mountedComponent] = useDarkMode()
	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<ThemeProvider theme={themeMode}>
				<Main>
					<Background />
					<Header>
						<h1>Gasto</h1>
						<DarkModeToggle theme={theme} toggleTheme={themeToggler} />
					</Header>
					<LeftNav />
					<MyContainer />
				</Main>
			</ThemeProvider>
		</motion.div>
	)
}

export default MainPage
