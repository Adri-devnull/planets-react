import { v4 } from 'uuid';
import { PLANETS_INFO } from '../constants/planetsInfo';
import {
	StyledContainerPlanetInfo,
	StyledHiddenImage,
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
import { useState } from 'react';

const Planet = ({ planet }) => {
	const [info, setInfo] = useState(0);

	return (
		<StyledPlanet>
			<StyledPlanetContent>
				<StyledContainerPlanetInfo>
					<StyledPlanetContainerImage>
						<img src={PLANETS_INFO[planet].images[info]} alt='' />
						<StyledHiddenImage>
							{info === 2 && (
								<img src={PLANETS_INFO[planet].images[3]} alt='' />
							)}
						</StyledHiddenImage>
					</StyledPlanetContainerImage>
					<StyledPlanetContainerInfo>
						<div>
							<StyledPlanetName>
								{PLANETS_INFO[planet].planetName}
							</StyledPlanetName>
							<StyledPlanetInfo>
								{PLANETS_INFO[planet].texts[info]}
							</StyledPlanetInfo>
							<StyledSpan>
								Source: <StyledWikipedia>Wikipedia</StyledWikipedia>
							</StyledSpan>
						</div>
						<StyledPlanetTabs>
							{PLANETS_INFO[planet].tabs.map((tab, index) => (
								<StyledPlanetButton
									key={v4()}
									onClick={() => changeIndexInfo(setInfo, index)}
									$active={index === info}
									$color={PLANETS_INFO[planet].$color}
								>
									{tab}
								</StyledPlanetButton>
							))}
						</StyledPlanetTabs>
					</StyledPlanetContainerInfo>
				</StyledContainerPlanetInfo>
			</StyledPlanetContent>
			<StyledPlanetStats>
				{PLANETS_INFO[planet].stats.map(item => (
					<StyledPlanetStatsBoxes key={item.props}>
						<StyledPlanetTitleStats>{item.props}</StyledPlanetTitleStats>
						<StyledPlanetInfoStats>{item.value}</StyledPlanetInfoStats>
					</StyledPlanetStatsBoxes>
				))}
			</StyledPlanetStats>
		</StyledPlanet>
	);
};

const changeIndexInfo = (setInfo, index) => {
	setInfo(index);
};

export default Planet;
