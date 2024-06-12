import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext, LoginContextType } from '../../context/LoginContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { validationEmail, validationPassword } from '../../Utils/validation';
import './SIgnIn.css';

const defaultTheme = createTheme();
const email = true;
const pass = true;

export default function SignIn() {
	const [, setStoreValue] = useLocalStorage('isLogin');
	const navigate = useNavigate();
	const value = useContext<LoginContextType>(LoginContext);
	const [emailValid, setEmailValid] = useState(email);
	const [passValid, setPassValid] = useState(pass);
	const [loading, setLoading] = useState(false);
	const [loader, setLoader] = useState('');
	const [disabl, setDisabl] = useState(false);
	const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>();
	const [emailErrorMessage, setEmailErrorMessage] = useState<string>();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const dataEmail: string | null | File = data.get('email');
		const dataPass: string | null | File = data.get('password');
		if (typeof dataEmail === 'string') {
			if (!validationEmail(dataEmail).correctValue) {
				setEmailValid(false);
				setEmailErrorMessage(validationEmail(dataEmail).message);
			} else {
				setEmailValid(true);
			}
		}
		if (typeof dataPass === 'string') {
			if (!validationPassword(dataPass).correctValue) {
				setPassValid(false);
				setPasswordErrorMessage(validationPassword(dataPass).message);
			} else {
				setPassValid(true);
			}
		}
		if (typeof dataPass === 'string' && typeof dataEmail === 'string') {
			if (
				validationPassword(dataPass).correctValue &&
				validationEmail(dataEmail).correctValue
			) {
				setStoreValue('true');
				setEmailValid(true);
				setPassValid(true);
				setLoading(true);
				setLoader('');
				setDisabl(true);
				try {
					setTimeout(() => {
						value.setValue();
						navigate('/');
					}, 2000);
				} catch (error) {
					console.log('Ошибка перехода на главную страницу', error);
				}
			}
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			{loading ? (
				<div className='loader'>
					<div className='loader-inner'>
						<span className='loader-icon'>Loading...</span>
					</div>
				</div>
			) : (
				<></>
			)}
			<Container component='main' maxWidth='xs' className={loader}>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Авторизация
					</Typography>
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							disabled={disabl}
						/>
						{emailValid ? (
							<></>
						) : (
							<span style={{ color: 'red' }}>{emailErrorMessage}</span>
						)}
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							disabled={disabl}
						/>
						{passValid ? (
							<></>
						) : (
							<span style={{ color: 'red' }}>{passwordErrorMessage}</span>
						)}
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Авторизация
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
