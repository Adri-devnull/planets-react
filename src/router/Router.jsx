import { Route, Routes } from 'react-router-dom';
import Planet from '../pages/Planet';
import { PLANETS_MENU } from '../constants/planetsInfo';

const Router = ({ planet }) => {
	return (
		<Routes>
			<Route
				path={PLANETS_MENU[planet].route}
				element={<Planet planet={planet} />}
			/>
		</Routes>
	);
};

export default Router;
