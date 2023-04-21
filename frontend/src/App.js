import { Routes, Route } from 'react-router-dom';
import CreateClaim from './pages/createClaim';
import ClaimList from './pages/claimList';
import './App.css';

function App() {
	return (
		<div className='App'>
			<div className='App'>
				<Routes>
					<Route path='/' element={<ClaimList />} />
					<Route path='create-claim' element={<CreateClaim />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
