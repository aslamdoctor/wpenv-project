import { createRoot } from 'react-dom/client';
import domReady from '@wordpress/dom-ready';

import './scss/main.scss';

function App() {
	return (
		<div>
			<h1>Hello World!!</h1>
			<p>this is just a test</p>
		</div>
	);
}

const Header = () => {
	return <h1 className='text-2xl'>Header Component</h1>;
};

domReady( () => {
	const app = document.getElementById( 'test' );
	const root = createRoot( app );

	root.render(
		<>
			<Header />
			<App />
		</>
	);
} );
