import { v4 } from 'uuid';
import { PLANETS_INFO } from '../constants/planetsInfo';
import {
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
import { TABS_COLORS } from '../constants/designValues';

const Planet = ({ planet }) => {
	const [info, setInfo] = useState(0);
	const [lastImage, setLastImage] = useState(false);
	return (
		<StyledPlanet>
			<StyledPlanetContent>
				<StyledPlanetContainerImage>
					<img src={PLANETS_INFO[planet].images[info]} alt='' />
					<StyledHiddenImage visibility={lastImage}>
						<img src={PLANETS_INFO[planet].images[3]} alt='' />
					</StyledHiddenImage>
				</StyledPlanetContainerImage>
				<StyledPlanetContainerInfo>
					<div>
						<StyledPlanetName>{PLANETS_INFO[planet].title}</StyledPlanetName>
						<StyledPlanetInfo>
							{PLANETS_INFO[planet].text[info]}
						</StyledPlanetInfo>
						<StyledSpan>
							Source: <StyledWikipedia>Wikipedia</StyledWikipedia>
						</StyledSpan>
					</div>
					<StyledPlanetTabs>
						{PLANETS_INFO[planet].tabs.map((tab, index) => (
							<StyledPlanetButton
								key={v4()}
								onClick={() =>
									changeIndexInfo(setInfo, index, setLastImage, lastImage)
								}
								$active={index === info}
								$color={TABS_COLORS[planet]}
							>
								{tab}
							</StyledPlanetButton>
						))}
					</StyledPlanetTabs>
				</StyledPlanetContainerInfo>
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

const changeIndexInfo = (setInfo, index, setLastImage, lastImage) => {
	setInfo(index);
	if (index === 2) {
		setLastImage(!lastImage);
	} else {
		setLastImage(false);
	}
};

export default Planet;
