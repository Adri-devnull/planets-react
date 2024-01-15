import { Route, Routes } from 'react-router-dom';
import Planet from '../pages/Planet';
import { PLANETS_MENU } from '../constants/planetsInfo';

const Router = () => {
	return (
		<Routes>
			{PLANETS_MENU.map(planet => (
				<Route
					key={planet.id}
					path={planet.route}
					element={<Planet planet={planet.name} />}
				/>
			))}
		</Routes>
	);
};

export default Router;
