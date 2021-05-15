import { motion } from 'framer-motion'
import Main from '../containers/Main'
import LeftNav from '../containers/LeftNav'
import Header from '../containers/Header'
import MyContainer from '../containers/MyContainer'
const MainPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Main>
				<Header />
				<LeftNav />
				<MyContainer />
			</Main>
		</motion.div>
	)
}

export default MainPage
