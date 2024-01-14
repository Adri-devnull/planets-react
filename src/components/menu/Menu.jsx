import { Link } from 'react-router-dom';
import { PLANETS_MENU } from '../../constants/planetsInfo';
import { StyledLi, StyledMenu, StyledTitle, StyledUl } from './styles';
import { TABS_COLORS } from '../../constants/designValues';

const Menu = ({ action }) => {
	return (
		<StyledMenu>
			<StyledTitle>THE PLANETS</StyledTitle>
			<StyledUl>
				{PLANETS_MENU.map((planet, index) => (
					<StyledLi key={planet.id} $color={TABS_COLORS[index]}>
						<Link to={planet.route} onClick={() => action(index)}>
							{planet.name}
						</Link>
					</StyledLi>
				))}
			</StyledUl>
		</StyledMenu>
	);
};

export default Menu;
