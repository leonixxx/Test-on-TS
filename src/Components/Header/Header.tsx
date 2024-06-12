import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
interface LinkItem {
	name: string;
	path: string;
	id: number;
}
export default function Header() {
	const location = useLocation();
	const linkData: LinkItem[] = [
		{
			name: 'Главная страница',
			path: '/',
			id: 1,
		},
		{ name: 'Авторизация', path: '/login', id: 2 },
		{
			name: 'Магазин',
			path: '/magazine',
			id: 3,
		},
	];
	return (
		<div className={styles.header}>
			{linkData.map(item => (
				<Link
					key={item.id}
					className={
						location.pathname === item.path ? styles.link2 : styles.link
					}
					to={item.path}
				>
					{item.name}
				</Link>
			))}
		</div>
	);
}
