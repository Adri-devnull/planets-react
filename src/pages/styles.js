import styled from 'styled-components';
import { COLORS, TYPOGRAPHYS } from '../constants/designValues';

const StyledPlanet = styled.div`
	margin: 30px 150px 0px 150px;
`;

const StyledPlanetContent = styled.div`
	display: flex;
`;

const StyledPlanetContainerImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60%;
	max-width: 600px;
	position: relative;
	left: 200px;
`;

const StyledPlanetContainerInfo = styled.div`
	width: 40%;
	padding: 0px 70px;
	height: 650px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-left: auto;
`;

const StyledPlanetName = styled.h1`
	font-size: 80px;
	font-weight: 100;
	color: ${COLORS.title};
	font-family: ${TYPOGRAPHYS.titlesFont};
`;

const StyledPlanetInfo = styled.h2`
	font-size: 1.1em;
	line-height: 1.4em;
	font-weight: 100;
	font-family: ${TYPOGRAPHYS.textsFont};
	color: ${COLORS.attenuatedText};
`;

const StyledSpan = styled.span`
	color: ${COLORS.attenuatedText};
	font-family: ${TYPOGRAPHYS.textsFont};
`;

const StyledWikipedia = styled.span`
	color: ${COLORS.title};
	text-decoration: underline;
	cursor: pointer;
	font-family: ${TYPOGRAPHYS.textsFont};
`;

const StyledPlanetTabs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const StyledPlanetStats = styled.div`
	padding-top: 40px;
	display: flex;
	justify-content: space-evenly;
`;

const StyledPlanetStatsBoxes = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 30px;
	justify-content: center;
	gap: 8px;
	border: 1px solid grey;
	width: 255px;
`;

const StyledPlanetButton = styled.button`
	border: none;
	color: ${COLORS.title};
	text-align: left;
	border: 1px solid ${COLORS.attenuatedText};
	padding: 15px 25px;
	font-family: ${TYPOGRAPHYS.textsFont};
	font-weight: 100;
	font-size: 1.1em;
	background-color: transparent;
	letter-spacing: 0.2em;
	cursor: pointer;
	background-color: ${({ $active, $color }) =>
		$active ? $color : 'transparent'};
	&:hover {
		background-color: ${({ $active, $color }) =>
			!$active ? `${COLORS.hoverColor}` : $color};
	}
`;

const StyledPlanetTitleStats = styled.h4`
	color: ${COLORS.attenuatedText};
	font-size: 1em;
	font-family: ${TYPOGRAPHYS.textsFont};
	margin: 0;
`;

const StyledPlanetInfoStats = styled.h4`
	color: ${COLORS.title};
	font-size: 2em;
	font-family: ${TYPOGRAPHYS.titlesFont};
	margin: 0;
`;

const StyledHiddenImage = styled.div`
	position: absolute;
	width: 150px;
	left: 50%;
	top: 405px;
	transform: translateX(-50%);
`;

const StyledContainerPlanetInfo = styled.div`
	display: flex;
`;

export {
	StyledPlanet,
	StyledPlanetContent,
	StyledPlanetName,
	StyledPlanetInfo,
	StyledPlanetTabs,
	StyledPlanetStats,
	StyledPlanetContainerImage,
	StyledPlanetContainerInfo,
	StyledPlanetButton,
	StyledPlanetStatsBoxes,
	StyledSpan,
	StyledPlanetTitleStats,
	StyledPlanetInfoStats,
	StyledWikipedia,
	StyledHiddenImage,
	StyledContainerPlanetInfo
};
