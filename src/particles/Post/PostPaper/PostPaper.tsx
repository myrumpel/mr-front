import { Paper } from '@mui/material'
import { ReactNode } from 'react'

interface iChildrenProps {
	children: ReactNode
}
const PostPaper: React.FC<iChildrenProps> = ({ children }) => {
	return (
		<>
			<Paper
				sx={{
					boxShadow: 4,
					padding: 2,
					borderRadius: 1,
					marginBottom: 3,
					maxWidth: '80vw',
					width: '100%',
				}}
			>
				{children}
			</Paper>
		</>
	)
}

export default PostPaper
