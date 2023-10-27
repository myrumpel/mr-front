import { TextareaAutosize } from '@mui/base/TextareaAutosize'
import SendIcon from '@mui/icons-material/Send'
import {
	Avatar,
	Box,
	Button,
	IconButton,
	Input,
	InputBase,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'

import { styled } from '@mui/material/styles'
import ss from './Profile.module.scss'

import { PhotoCamera } from '@mui/icons-material'
import { deepOrange } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { useState } from 'react'
import image from '../../assets/qweqwe.jpeg'
const theme = createTheme({
	palette: {
		primary: {
			light: '#e3f2fd',
			main: '#1976d2',
			dark: '#0d47a1',
			contrastText: '#fff',
		},
		secondary: {
			light: '#f5f0b9',
			main: '#fbec5d',
			dark: '#e3d230',
			contrastText: '#000',
		},
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'--TextField-brandBorderColor': '#E0E3E7',
					'--TextField-brandBorderHoverColor': '#B2BAC2',
					'--TextField-brandBorderFocusedColor': '#6F7E8C',
					'& label.Mui-focused': {
						color: 'var(--TextField-brandBorderFocusedColor)',
					},
				},
			},
		},
	},
})

const prim = theme.palette.primary
const sec = theme.palette.secondary

const Profile = () => {
	const [selectedImage, setSelectedImage] = useState(null)

	const handleImageChange = event => {
		const file = event.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				setSelectedImage(reader.result)
			}
			reader.readAsDataURL(file)
		}
	}
	const CustomTextarea = styled(TextareaAutosize)(() => ({
		// Ваши стили здесь
		resize: 'none', // Отключает изменение размеров
		// backgroundColor: 'red',
		fontSize: '24px',
		padding: '8px',
		minHeight: '28px!important',
		maxHeight: '130px',
		width: '100%',
		maxWidth: 400,
	}))
	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<Box sx={{ marginRight: 2, width: '25%' }}>
					<Avatar
						src={image}
						sx={{
							maxWidth: '320px',
							maxHeight: '400px',
							width: '100%',
							height: '100%',
							borderRadius: 1,
							objectFit: 'cover',
						}}
					/>
				</Box>
				<Box sx={{ width: '100%' }}>
					<Typography
						sx={{
							fontSize: 30,
							fontWeight: 600,
							marginBottom: 2,
							width: '100%',

							borderBottom: '1px solid #a0a0a0',
						}}
						component={'div'}
					>
						Иван Маловичко
					</Typography>
					<TableContainer
						component={Paper}
						sx={{
							boxShadow: 'none',
							width: '60%',
							marginBottom: 3,
							borderRadius: 0,
						}}
					>
						<Table sx={{ marginLeft: '8px' }}>
							<TableBody>
								<TableRow>
									<TableCell
										sx={{
											padding: '4px',
											borderBottom: 'none',
											width: '300px',
										}}
									>
										Пол:
									</TableCell>
									<TableCell sx={{ padding: '4px', borderBottom: 'none' }}>
										мужской
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											padding: '4px',
											borderBottom: 'none',
											width: '300px',
										}}
									>
										День рождения:
									</TableCell>
									<TableCell sx={{ padding: '4px', borderBottom: 'none' }}>
										06.28.1995
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											padding: '4px',
											borderBottom: 'none',
											width: '300px',
										}}
									>
										Семейное положение:
									</TableCell>
									<TableCell sx={{ padding: '4px', borderBottom: 'none' }}>
										свободен
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											padding: '4px',
											borderBottom: 'none',
											width: '300px',
										}}
									>
										Родной город:
									</TableCell>
									<TableCell sx={{ padding: '4px', borderBottom: 'none' }}>
										Новосибирск
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<Typography
						sx={{
							fontSize: 20,
							fontWeight: 600,
							marginBottom: 2,
							width: '100%',
							backgroundColor: prim.light,
							// borderBottom: '1px solid #a0a0a0',
							padding: '8px',
							color: prim.dark,
						}}
						component={'div'}
					>
						Информация
					</Typography>
					<TableContainer
						component={Paper}
						sx={{
							boxShadow: 'none',
							width: '60%',
						}}
					>
						<Table sx={{ marginLeft: '8px' }}>
							<TableHead>
								<TableRow>
									<TableCell
										sx={{
											borderBottom: 'none',
											padding: '4px',
											fontWeight: 700,
											fontSize: 16,
											color: theme.palette.primary.dark,
										}}
									>
										Контактная информация
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell
										sx={{
											padding: '4px',
											borderBottom: 'none',
											width: '300px',
										}}
									>
										Номер телефона:{' '}
									</TableCell>
									<TableCell sx={{ padding: '4px', borderBottom: 'none' }}>
										+7 918 09-22-693
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											padding: '4px',
											borderBottom: 'none',
											width: '300px',
										}}
									>
										Email:
									</TableCell>
									<TableCell sx={{ padding: '4px', borderBottom: 'none' }}>
										my@rumpelweb.ru
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<div className={ss.imageLoad}>
						<Input
							type='file'
							id='image-upload'
							onChange={handleImageChange}
							style={{ display: 'none' }}
						/>
						<label htmlFor='image-upload'>
							{!selectedImage && (
								<InputBase
									placeholder='Загрузить фото'
									readOnly
									value={selectedImage ? '' : undefined}
								/>
							)}
							{selectedImage && <img src={selectedImage} alt='Selected' />}
							<IconButton color='primary' component='span'>
								<PhotoCamera />
							</IconButton>
						</label>
					</div>
				</Box>
			</Box>
			<Box
				sx={{
					width: '100%',
					marginTop: 2,
					display: 'flex',
					justifyContent: 'space-around',
					backgroundColor: prim.light,
					padding: 2,
				}}
			>
				<form>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							width: '100%',
							minWidth: 500,
						}}
					>
						<CustomTextarea />

						<Button
							variant='contained'
							endIcon={<SendIcon />}
							sx={{
								width: '100%',
								maxWidth: 140,
								maxHeight: 46,
								marginLeft: 3,
							}}
						>
							Отправить
						</Button>
					</Box>
				</form>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						boxShadow: 4,
						padding: 2,
						borderRadius: 1,
						marginBottom: 2,
						marginTop: 2,
						maxWidth: '80vw',
					}}
				>
					<Avatar
						sx={{ bgcolor: deepOrange[500], marginBottom: 0.8 }}
						component='div'
					/>
					<Typography
						sx={{ fontSize: 16, marginBottom: 1.5 }}
						component='div'
						color='#00000099'
					>
						Имя фамилия
					</Typography>
					<Typography sx={{ fontSize: 16 }} component='div'>
						Текст поста Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Quibusdam odio voluptatibus distinctio tempora, praesentium
						vero doloremque cum, deserunt repellendus esse voluptas minima.
						Adipisci doloremque doloribus quibusdam ut aspernatur repellat,
						dolor quam. Iure error repudiandae, dolore reiciendis nulla,
						corporis asperiores, voluptate quam quia aspernatur corrupti sit
						suscipit deserunt labore iusto voluptas!
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: 1,
						}}
					>
						<Typography component='div' color='#00000099'>
							02.02.23
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default Profile
