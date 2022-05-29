import { Routes, Route } from 'react-router-dom';
import { Home, About, Pricing, Contact, NotFound } from './pages';
import Header from './layout/Header/Header';
import './App.scss';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
