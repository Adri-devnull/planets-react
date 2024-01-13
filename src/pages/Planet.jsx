import { v4 } from 'uuid';
import { PLANETS_INFO } from '../constants/planetsInfo';
import {
	StyledPlanet,
	StyledPlanetButton,
	StyledPlanetContainerImage,
	StyledPlanetContainerInfo,
	StyledPlanetContent,
	StyledPlanetInfo,
	StyledPlanetName,
	StyledPlanetStats,
	StyledPlanetTabs
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
						<span>Source: Wikipedia</span>
					</div>
					<StyledPlanetTabs>
						{PLANETS_INFO[planet].tabs.map((tab, index) => (
							<StyledPlanetButton key={v4()}>{tab}</StyledPlanetButton>
						))}
					</StyledPlanetTabs>
				</StyledPlanetContainerInfo>
			</StyledPlanetContent>
			<StyledPlanetStats>
				{PLANETS_INFO[planet].list.map(item => (
					<div key={item.property}>
						<h4>{item.property}</h4>
						<h2>{item.value}</h2>
					</div>
				))}
			</StyledPlanetStats>
		</StyledPlanet>
	);
};

export default Planet;
