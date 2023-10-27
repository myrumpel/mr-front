import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Link } from 'react-router-dom'
import ss from './Header.module.scss'
const settings = [
	{ name: 'Профиль', link: '/profile' },
	{ name: 'Пользователи', link: '/users' },
	{ name: 'Выход', link: '/' },
]

const Header: React.FC = () => {
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	)

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<Box sx={{ flexGrow: 1, marginBottom: 3 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						<Link to='/' className={ss.linkHome}>
							MyGosh
						</Link>
					</Typography>
					<Link to='/signup'>
						<Button sx={{ color: 'white', fontWeight: 500, fontSize: 18 }}>
							Вход
						</Button>
					</Link>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map(setting => (
								<MenuItem
									sx={{ padding: 0 }}
									key={setting.name}
									onClick={handleCloseUserMenu}
								>
									<Link to={setting.link} className={ss.link}>
										<Typography textAlign='center'>{setting.name}</Typography>
									</Link>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
export default Header
