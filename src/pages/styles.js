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
	position: relative;
`;

const StyledPlanetContainerInfo = styled.div`
	width: 30%;
	padding: 0px 70px;
	height: 650px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const StyledPlanetName = styled.h1`
	font-size: 80px;
	font-weight: 100;
	color: ${COLORS.title};
	font-family: ${TYPOGRAPHYS.titlesFont};
`;

const StyledPlanetInfo = styled.h2`
	font-size: 1em;
	line-height: 1.4em;
	font-weight: 100;
	font-family: ${TYPOGRAPHYS.textsFont};
	color: ${COLORS.attenuatedText};
`;

const StyledSpan = styled.span`
	color: ${COLORS.attenuatedText};
`;

const StyledWikipedia = styled.span`
	color: ${COLORS.title};
	text-decoration: underline;
	cursor: pointer;
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
	padding-left: 30px;
	justify-content: center;
	gap: 8px;
	border: 1px solid grey;
	width: 255px;
	height: 128px;
`;

const StyledPlanetButton = styled.button`
	border: none;
	color: ${COLORS.title};
	border: 1px solid ${COLORS.attenuatedText};
	padding: 15px 10px;
	font-family: ${TYPOGRAPHYS.textsFont};
	font-weight: 100;
	font-size: 1.1em;
	background-color: transparent;
	letter-spacing: 0.2em;
	cursor: pointer;
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
	display: ${({ visibility }) => (visibility ? 'flex' : 'none')};
	position: absolute;
	width: 200px;
	height: 200px;
	left: 404px;
	top: 405px;
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
	StyledHiddenImage
};
