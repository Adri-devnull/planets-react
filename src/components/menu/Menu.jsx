import { Link } from 'react-router-dom';
import { PLANETS_MENU } from '../../constants/planetsInfo';
import { StyledMenu } from './styles';

const Menu = () => {
	return (
		<StyledMenu>
			<h1>THE PLANETS</h1>
			<ul>
				{PLANETS_MENU.map(planet => (
					<Link key={planet.id} to={planet.route}>
						{planet.name}
					</Link>
				))}
			</ul>
		</StyledMenu>
	);
};

export default Menu;
