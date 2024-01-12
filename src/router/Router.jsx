import { Route, Routes } from 'react-router-dom';

const Router = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<h1> Aqui es donde pondremos el componente planeta</h1>}
			/>
			<Route path='/home' element={<h1>adios</h1>} />
		</Routes>
	);
};

export default Router;
