import { DUMMY_POST } from '../../DUMMY_POST'
import Post from '../../particles/Post/'
import ss from './HomePage.module.scss'

const HomePage = () => {
	return (
		<div className={ss.boxKeeper}>
			{DUMMY_POST.map(elem => {
				return <Post key={elem.id} {...elem} />
			})}
		</div>
	)
}

export default HomePage
