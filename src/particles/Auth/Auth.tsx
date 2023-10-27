import { Visibility, VisibilityOff } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Switch,
	TextField,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ss from '../../Pages/SignUpPage/SignUpPage.module.scss'
const label = { inputProps: { 'aria-label': 'Switch demo' } }

const handleClickShowPassword = () => setShowPassword(show => !show)

const handleMouseDownPassword = (
	event: React.MouseEvent<HTMLButtonElement>
) => {
	event.preventDefault()
}
const SignUpPage = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [loading, setLoading] = useState(false)
	return (
		<>
			<Typography
				sx={{
					textAlign: 'center',
					fontSize: 50,
					fontWeight: 500,
					marginBottom: 8,
					marginTop: 8,
				}}
			>
				Авторизация
			</Typography>
			<Typography
				sx={{
					textAlign: 'center',
					// fontSize: 50,
					fontWeight: 500,
					marginBottom: 10,
					marginTop: 4,
				}}
			>
				У Вас нет профиля?
				<div>
					<Link to='/signup' className='linkPrimary'>
						{' '}
						Зарегистрироваться
					</Link>
				</div>
			</Typography>
			<form className={ss.form} action=''>
				<TextField
					id='demo-helper-text-misaligned-no-helper'
					type='email'
					label='Email'
					sx={{ marginBottom: 1, maxWidth: '300px', width: '100%' }}
				/>

				<FormControl
					sx={{ m: 1, maxWidth: '300px', width: '100%', marginBottom: 2 }}
					variant='outlined'
				>
					<InputLabel htmlFor='outlined-adornment-password'>Пароль</InputLabel>
					<OutlinedInput
						id='outlined-adornment-password'
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
					/>
				</FormControl>
				<Typography sx={{ alignItems: 'start', marginBottom: 2 }}>
					<Switch {...label} />
					Запомнить меня
				</Typography>
				<LoadingButton
					// onClick={''}
					sx={{ maxWidth: '200px', width: '100%' }}
					endIcon={<SendIcon />}
					loading={loading}
					loadingPosition='end'
					variant='contained'
				>
					<span>Войти</span>
				</LoadingButton>
			</form>
		</>
	)
}

export default SignUpPage
