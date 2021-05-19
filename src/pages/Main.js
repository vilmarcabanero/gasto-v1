import { motion } from 'framer-motion'
import Container from '../containers/Container'
import LeftNav from '../containers/LeftNav'
import Header from '../containers/Header'
import Main from '../containers/Main'
import Background from '../containers/Background'
import DarkModeToggle from '../components/DarkModeToggle'
import { useDarkMode } from '../utils/DarkMode/useDarkMode'
import { lightTheme, darkTheme } from '../utils/DarkMode/themes'
import { ThemeProvider } from 'styled-components'
// import Title from '../components/Title'
// import IncomeExpense from '../components/Expense'
// import NewTransaction from '../components/NewTransaction'
import Gasto from '../components/Gasto'
import Search from '../components/LeftNav/Search'
import Book from '../components/LeftNav/Book'


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
				<Container>
					<Background />
					<Header>
						<h1>Gasto</h1>
						<DarkModeToggle theme={theme} toggleTheme={themeToggler} />
					</Header>
					<LeftNav>
						<Search/>
						<Book/>
					</LeftNav>
					<Main>
					{/* <Title/>
					<NewTransaction/>
					<IncomeExpense/> */}
					<Gasto/>
					</Main>
				</Container>
			</ThemeProvider>
		</motion.div>
	)
}

export default MainPage
