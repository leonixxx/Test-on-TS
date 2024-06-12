import { useContext } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/SIgnIn/SIgnIn';
import { LoginContext, LoginContextType } from './context/LoginContext';
import Layout from './pages/Layout';
import Magazine from './pages/Magazine';
import Main from './pages/Main';
import { store } from './store/store';

function App() {
	const value = useContext<LoginContextType>(LoginContext);

	return (
		<Provider store={store}>
			<LoginContext.Provider value={value}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Main />} />
						<Route path='/magazine' index element={<Magazine />} />
					</Route>
					<Route path='/login' element={<SignIn />}></Route>
				</Routes>
			</LoginContext.Provider>
		</Provider>
	);
}

export default App;
