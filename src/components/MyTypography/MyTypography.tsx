import { Typography } from '@mui/material'
interface iData {
	data: string
	style?: React.CSSProperties
}

const MyTypography: React.FC<iData> = ({ data, style }) => {
	return (
		<Typography sx={style} component='div'>
			{data}
		</Typography>
	)
}

export default MyTypography
