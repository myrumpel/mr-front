import { Grid } from '@mui/material'
import React from 'react'
import MyTypography from '../../components/MyTypography'
import PostAvatar from './PostPaper/PostAvatar'
import PostPaper from './PostPaper/PostPaper'
interface iPostProps {
	name: string
	surname: string
	text: string
	createAppAt: string
}
const styles = {
	nameSurname: {
		fontSize: 16,
		color: '#00000099',
		fontWeight: 500,
	},
	text: { fontSize: 18, color: '#00000099' },
	date: { fontSize: 12, color: '#00000099' },
}

const Post: React.FC<iPostProps> = ({ name, surname, text, createAppAt }) => {
	return (
		<PostPaper>
			<PostAvatar />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<MyTypography
						data={`${name} ${surname}`}
						style={styles.nameSurname}
					/>
				</Grid>
				<Grid item xs={12}>
					<MyTypography data={text} style={styles.text} />
				</Grid>

				<Grid item xs={12}>
					<MyTypography data={createAppAt} style={styles.date} />
				</Grid>
			</Grid>
		</PostPaper>
	)
}

export default Post
