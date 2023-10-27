import { ReactNode } from 'react'
import Header from '../Header/index'
interface LayoutProps {
	children: ReactNode
}
const Layout: React.FC<LayoutProps> = props => {
	return (
		<>
			<Header />
			{props.children}
		</>
	)
}

export default Layout
