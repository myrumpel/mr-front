import Box from '@mui/material/Box'
import Container, { ContainerProps } from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'

const SimpleContainer: React.FC<ContainerProps> = props => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Box sx={{ height: '100vh' }}>{props.children}</Box>
			</Container>
		</React.Fragment>
	)
}
export default SimpleContainer
