import { v4 } from 'uuid';
import { PLANETS_INFO, PLANETS_MENU } from '../constants/planetsInfo';

const Planet = ({ planet }) => {
	return (
		<div>
			<div>
				<div>
					<img src='' alt='' />
				</div>
				<div>
					<div>
						<h1>Planeta</h1>
						<h2>Info planeta</h2>
						<span>Wikipedia</span>
					</div>
					<div>
						{PLANETS_MENU[planet].tabs.map((tab, index) => (
							<button key={v4()}>{tab}</button>
						))}
					</div>
				</div>
			</div>
			<div>
				{PLANETS_INFO[planet].list.map(item => (
					<div key={item.property}>
						<h4>{item.property}</h4>
						<h2>{item.value}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default Planet;
