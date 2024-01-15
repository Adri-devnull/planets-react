import { PLANETS_MENU } from '../../constants/planetsInfo';
import {
	StyledLi,
	StyledLink,
	StyledMenu,
	StyledTitle,
	StyledUl
} from './styles';
import { TABS_COLORS } from '../../constants/designValues';

const Menu = () => {
	return (
		<StyledMenu>
			<StyledTitle>THE PLANETS</StyledTitle>
			<StyledUl>
				{PLANETS_MENU.map((planet, index) => (
					<StyledLi key={planet.id} $color={TABS_COLORS[index]}>
						<StyledLink to={planet.route}>{planet.name}</StyledLink>
					</StyledLi>
				))}
			</StyledUl>
		</StyledMenu>
	);
};

export default Menu;
