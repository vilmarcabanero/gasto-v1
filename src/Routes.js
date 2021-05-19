import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages
import Main from './pages/Main'
// import LoginPage from './pages/Login'
// import RegisterPage from './pages/Register'

const Routes = () => {
	const location = useLocation()
	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
			<Route exact path='/' component={Main} />
			</Switch>
		</AnimatePresence>
	)
}

export default Routes
