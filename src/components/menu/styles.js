import styled from 'styled-components';
import { COLORS, TYPOGRAPHYS } from '../../constants/designValues';

const StyledMenu = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${COLORS.title};
	padding: 0px 40px;
	border-bottom: 1px solid #979797;
`;

const StyledUl = styled.ul`
	display: flex;
	list-style: none;
	gap: 25px;
`;

const StyledLi = styled.li`
	:visited {
		color: ${COLORS.title};
	}
`;

const StyledTitle = styled.h1`
	font-family: ${TYPOGRAPHYS.titlesFont};
	font-size: 28px;
`;

export { StyledMenu, StyledUl, StyledTitle, StyledLi };
