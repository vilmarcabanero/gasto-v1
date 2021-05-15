import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages
import MainPage from './pages/Main'
// import LoginPage from './pages/Login'
// import RegisterPage from './pages/Register'

const Routes = () => {
	const location = useLocation()
	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				= <Route exact path='/' component={MainPage} />
				{/* <Route exact path='/login' component={LoginPage} />
				<Route exact path='/register' component={RegisterPage} /> */}
			</Switch>
		</AnimatePresence>
	)
}

export default Routes
