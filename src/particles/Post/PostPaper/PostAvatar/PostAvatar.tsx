import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

const PostAvatar: React.FC = () => {
	return (
		<Avatar
			sx={{ bgcolor: deepOrange[500], marginBottom: 0.8 }}
			component='div'
		/>
	)
}

export default PostAvatar
