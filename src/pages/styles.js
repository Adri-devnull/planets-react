import styled from 'styled-components';
import { COLORS, TYPOGRAPHYS } from '../constants/designValues';

const StyledPlanet = styled.div`
	background-color: lightblue;
	margin: 40px 150px 0px 150px;
`;

const StyledPlanetContent = styled.div`
	display: flex;
`;

const StyledPlanetContainerImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60%;
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
	color: ${COLORS.title};
	font-family: ${TYPOGRAPHYS.titlesFont};
`;

const StyledPlanetInfo = styled.h2`
	font-size: 1em;
	line-height: 1.4em;
	font-family: ${TYPOGRAPHYS.textsFont};
`;

const StyledPlanetTabs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const StyledPlanetStats = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const StyledPlanetButton = styled.button`
	border: none;
	border: 1px solid black;
	padding: 15px 10px;
	font-family: ${TYPOGRAPHYS.textsFont};
	font-weight: bold;
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
	StyledPlanetButton
};
