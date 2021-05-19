import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/Traversy/Header'
import { Balance } from '../components/Traversy/Balance'
import { IncomeExpenses } from '../components/Traversy/IncomeExpenses'
import { TransactionList } from '../components/Traversy/TransactionList'
import { AddTransaction } from '../components/Traversy/AddTransaction'
import { GlobalProvider } from '../context/GlobalState'
import './Traversy.css'

const Traversy = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<GlobalProvider>
				<main className='body'>
					<Header />
					<div className='container'>
						<Balance />
						<IncomeExpenses />
						<TransactionList />
						<AddTransaction />
					</div>
				</main>
			</GlobalProvider>
		</motion.div>
	)
}

export default Traversy
