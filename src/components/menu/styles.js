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
	gap: 50px;
`;

const StyledLi = styled.li`
	font-size: 0.9em;
	position: relative;
	display: block;

	&::before {
		content: '';
		position: absolute;
		top: -32px;
		left: 0;
		width: 100%;
		height: 6px;
		background-color: ${({ $color }) => $color};
		transition: transform 0.1s ease;
		transform: scaleX(0);
	}

	&:hover::before {
		transform: scaleX(1.3);
	}
`;

const StyledTitle = styled.h1`
	font-family: ${TYPOGRAPHYS.titlesFont};
	font-size: 28px;
`;

export { StyledMenu, StyledUl, StyledTitle, StyledLi };
