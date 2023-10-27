import SendIcon from '@mui/icons-material/Send'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import LoadingButton from '@mui/lab/LoadingButton'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ss from './SignUpPage.module.scss'
const SignUpPage = () => {
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = React.useState(false)

	const handleClickShowPassword = () => setShowPassword(show => !show)

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
	}
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
				Регистрация профиля
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
				У Вас уже есть профиль?
				<div>
					<Link to='/auth' className='linkPrimary'>
						{' '}
						Авторизоваться
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

				<FormControlLabel
					sx={{ marginBottom: '16px', textAlign: 'left' }}
					required
					control={<Checkbox />}
					label={
						<Typography>
							Вы принимаете
							<Link to='/privacy' className='linkPrimary'>
								{' '}
								пользовательское соглашение
							</Link>
						</Typography>
					}
				></FormControlLabel>

				<LoadingButton
					// onClick={''}
					sx={{ maxWidth: '200px', width: '100%' }}
					endIcon={<SendIcon />}
					loading={loading}
					loadingPosition='end'
					variant='contained'
				>
					<span>Создать</span>
				</LoadingButton>
			</form>
		</>
	)
}

export default SignUpPage
