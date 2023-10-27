import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import SimpleContainer from './components/simpleContainer'
import './index.css'
import Layout from './particles/Layout/'
ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<SimpleContainer>
				<Layout>
					<App />
				</Layout>
			</SimpleContainer>
		</Router>
	</StrictMode>
)
