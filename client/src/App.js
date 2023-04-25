import { Routes, Route } from 'react-router-dom';
import AdminModal from './pages/admin';
import ClaimList from './pages/claimList';
import CreateClaim from './pages/createClaim';
import NotFound from './pages/notFound';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='claims' element={<ClaimList />} />
				<Route path='/create-claim' element={<CreateClaim />} />
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<AdminModal />} />
			</Routes>
		</div>
	);
}

export default App;
