import './App.scss';
import jobs from './data/jobs.json';

function App() {
	return (
		<div className="App">
			<h1>Job Application Process</h1>
			<div className="jobs">
				{jobs.map((job, index) => {
					return <div className="job">nnn</div>;
				})}
			</div>
		</div>
	);
}

export default App;
