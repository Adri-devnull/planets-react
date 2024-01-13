import { v4 } from 'uuid';
import { PLANETS_INFO } from '../constants/planetsInfo';
import {
	StyledPlanet,
	StyledPlanetButton,
	StyledPlanetContainerImage,
	StyledPlanetContainerInfo,
	StyledPlanetContent,
	StyledPlanetInfo,
	StyledPlanetInfoStats,
	StyledPlanetName,
	StyledPlanetStats,
	StyledPlanetStatsBoxes,
	StyledPlanetTabs,
	StyledPlanetTitleStats,
	StyledSpan,
	StyledWikipedia
} from './styles';

const Planet = ({ planet }) => {
	return (
		<StyledPlanet>
			<StyledPlanetContent>
				<StyledPlanetContainerImage>
					<img src={PLANETS_INFO[planet].image[0]} alt='' />
				</StyledPlanetContainerImage>
				<StyledPlanetContainerInfo>
					<div>
						<StyledPlanetName>{PLANETS_INFO[planet].title}</StyledPlanetName>
						<StyledPlanetInfo>{PLANETS_INFO[planet].text[0]}</StyledPlanetInfo>
						<StyledSpan>
							Source: <StyledWikipedia>Wikipedia</StyledWikipedia>
						</StyledSpan>
					</div>
					<StyledPlanetTabs>
						{PLANETS_INFO[planet].tabs.map((tab, index) => (
							<StyledPlanetButton key={v4()}>{tab}</StyledPlanetButton>
						))}
					</StyledPlanetTabs>
				</StyledPlanetContainerInfo>
			</StyledPlanetContent>
			<StyledPlanetStats>
				{PLANETS_INFO[planet].stats.map(item => (
					<StyledPlanetStatsBoxes key={item.property}>
						<StyledPlanetTitleStats>{item.property}</StyledPlanetTitleStats>
						<StyledPlanetInfoStats>{item.value}</StyledPlanetInfoStats>
					</StyledPlanetStatsBoxes>
				))}
			</StyledPlanetStats>
		</StyledPlanet>
	);
};

export default Planet;
