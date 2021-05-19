import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages
import Main from './pages/Main'
import Max from './pages/Max'
import Traversy from './pages/Traversy'
import Indian from './pages/Indian'
// import LoginPage from './pages/Login'
// import RegisterPage from './pages/Register'

const Routes = () => {
	const location = useLocation()
	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
			<Route exact path='/' component={Main} />
				<Route exact path='/max' component={Max} />
				
				<Route exact path='/traversy' component={Traversy} />
				<Route exact path='/indian' component={Indian} />
			</Switch>
		</AnimatePresence>
	)
}

export default Routes
