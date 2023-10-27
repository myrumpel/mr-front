import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/'
import Profile from './Pages/Profile'
import SignUpPage from './Pages/SignUpPage'
import Users from './Pages/Users'
import Auth from './particles/Auth/'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/users' element={<Users />} />
			</Routes>
		</>
	)
}

export default App
