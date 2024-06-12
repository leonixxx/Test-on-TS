import StarIcon from '@mui/icons-material/Star';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import styles from './MagazineCard.module.css';

export default function MagazineCard() {
	return (
		<article className={styles.wrap}>
			<div className={styles.iphone__block}>
				<div className={styles.iphone__inner}>Быстрый просмотр</div>
			</div>
			<Badge
				badgeContent={'-14%'}
				color='secondary'
				className={styles.badge}
			></Badge>
			<div className={styles.contentBlock}>
				<div className={styles.wrap__price}>
					<p className={styles.with__rice}>86 956 ₽</p>
					<p className={styles.before__price}>99 990 ₽</p>
				</div>
				<p className={styles.priceMir}>85 251 ₽</p>
				<p className={styles.technical_parameters}>
					{`Apple / Смартфон Iphone 12 Pro 128GB / 6.1" / 2532x1170 / OLED / 128ГБ`}
				</p>
				<Box
					sx={{
						width: 200,
						display: 'flex',
						alignItems: 'center',
						'margin-top': '8px',
					}}
				>
					<button>
						<Rating
							name='text-feedback'
							value={5}
							readOnly
							precision={0.5}
							emptyIcon={
								<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
							}
							sx={{
								color: 'purple',
								p: 0,
							}}
						/>
					</button>
					<Box sx={{ ml: 2, color: 'gray' }}>87</Box>
				</Box>
				<button className={styles.credit}>РАССРОЧКА 0-0-6</button>
				<div className={styles.basket}>
					<button className={styles.basket__btn}>В корзину</button>
					<button>
						<img
							className={styles.basket__img}
							src='../../../public/image/heart.svg'
							alt='heart image'
						/>
					</button>
				</div>
			</div>
		</article>
	);
}
