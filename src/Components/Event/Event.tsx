import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import getTime from '../../Utils/getTime';
import styles from './Event.module.css';

export interface WebSocketInterface {
	ctime: string;
	event: string;
}
export default function Event() {
	const [events, setEvents] = useState<WebSocketInterface[]>([]);
	useEffect(() => {
		const socket = new WebSocket('wss://test.dev-relabs.ru/event');

		socket.onmessage = event => {
			try {
				const data = JSON.parse(event.data);
				setEvents(prevEvents => [...prevEvents, data]);
			} catch (error) {
				console.error('Ошибка при анализе данных веб-сокета:', error);
			}
		};
		return () => {
			socket.close();
		};
	}, []);

	return (
		<div className={styles.wrap}>
			<h2>События</h2>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Дата</TableCell>
							<TableCell align='left'>События</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{events.map(row => (
							<TableRow
								key={row.ctime}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{getTime(parseInt(row.ctime))}
								</TableCell>
								<TableCell align='left'>{row.event}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
