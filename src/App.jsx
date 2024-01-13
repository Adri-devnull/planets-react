import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Menu from './components/menu/Menu';
import Content from './components/content/Content';

const App = () => {
	return (
		<BrowserRouter>
			<Content>
				<Menu />
				<Router></Router>
			</Content>
		</BrowserRouter>
	);
};

export default App;
