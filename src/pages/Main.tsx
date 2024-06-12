import Event from '../Components/Event/Event';
import ListItem from '../Components/ListItem/ListItem';
import './pages.css';

export default function Main() {
	return (
		<section className='mainFlex'>
			<ListItem></ListItem>
			<Event></Event>
		</section>
	);
}
