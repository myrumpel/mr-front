import { Grid } from '@mui/material'
import { DUMMY_POST } from '../../DUMMY_POST'
import User from './User/'
const Users: React.FC = () => {
	return (
		<Grid container spacing={3}>
			{DUMMY_POST.map(elem => {
				return <User {...elem} />
			})}
		</Grid>
	)
}

export default Users
