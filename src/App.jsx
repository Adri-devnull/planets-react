import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Menu from './components/menu/Menu';
import Content from './components/content/Content';
import { useState } from 'react';

const App = () => {
	const [value, setValue] = useState(0);

	return (
		<BrowserRouter>
			<Content>
				<Menu action={index => getIndex(setValue, index)} />
				<Router planet={value}></Router>
			</Content>
		</BrowserRouter>
	);
};

const getIndex = (setValue, index) => {
	setValue(index);
};

export default App;
