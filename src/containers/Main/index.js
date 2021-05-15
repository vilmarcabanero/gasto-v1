import React from 'react'
import { MainContainer } from './index.style'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Main = props => {
	return (
		<MainContainer>
			<React.Fragment>
				<CssBaseline />
				<Container maxWidth='lg' style={{ backgroundColor: '#cfe8fc', position: 'relative',  height: '100vh' }}>
          
          {props.children}
        
        </Container>
			</React.Fragment>
		</MainContainer>
	)
}

export default Main
