import ExpenseTracker from '../components/Indian/ExpenseTracker';
import '../App.css'
import { motion } from 'framer-motion'

const IndianPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<h1>Indian, with local storage version</h1>
			<ExpenseTracker />
		</motion.div>
	)
}



export default IndianPage
