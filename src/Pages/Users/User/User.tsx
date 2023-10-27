import { Grid, Paper, Switch } from '@mui/material'
import MyTypography from '../../../components/MyTypography/'
const label = {
	inputProps: {
		'aria-label': 'Подтвердить пользователя',
	},
}
interface iPostProps {
	name: string
	surname: string
	city: string
	createAppAt: string
}
const commonStyles = {
	fontSize: 16,
	marginBottom: 1.5,
}
const styles = {
	paper: {
		padding: 2,
		display: 'flex',
		alignItems: ' end',
		justifyContent: 'space-between',
	},
	nameSurname: { ...commonStyles },
	defaultText: { ...commonStyles, color: '#00000099' },
}

const User: React.FC<iPostProps> = ({ name, surname, city, createAppAt }) => {
	return (
		<Grid item md={4} sm={6} xs={12}>
			<Grid item>
				<Paper sx={styles.paper}>
					<Grid
						container
						spacing={1}
						sx={{ display: 'flex', flexDirection: 'column' }}
					>
						<Grid item md={1} component='span'>
							<MyTypography
								data={`${name} ${surname}`}
								style={styles.nameSurname}
							/>
						</Grid>

						<Grid item md={12} component='div'>
							<MyTypography data={city} style={styles.defaultText} />
						</Grid>
					</Grid>
					<Grid item>
						<MyTypography data={createAppAt} style={styles.defaultText} />
						<Switch {...label} />
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default User
