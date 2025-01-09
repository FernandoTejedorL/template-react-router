import { BrowserRouter, Link } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import TemplateProvider from './providers/TemplateProvider';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<TemplateProvider>
				<BrowserRouter>
					<nav>
						<ul>
							<Link to='/'>Home</Link>
						</ul>
						<ul>
							<Link to='/about'>About</Link>
						</ul>
					</nav>
					<button>One</button>
					<button>Two</button>
					<button>Three</button>
					<Router />
				</BrowserRouter>
			</TemplateProvider>
		</>
	);
};

export default App;
