import { useState } from 'react';
import './App.scss';
import _jobs from './data/jobs.json';

_jobs.forEach(job => {
	job.status = 'send';
});

function App() {
	const [displayKind, setDisplayKind] = useState('full');
	const [jobs, setJobs] = useState(_jobs);

	console.log(jobs);

	const handleToggleView = () => {
		setDisplayKind(displayKind === 'full' ? 'list' : 'full');
	};

	return (
		<div className="App">
			<h1>Job Application Process</h1>
			<button onClick={handleToggleView}>Toggle View</button>
			{displayKind === 'full' ? (
				<div className="jobs">
					{jobs.map((job, index) => {
						return (
							<div key={index} className="job">
								<div className="position">
									<a href={job.url}>{job.position}</a>
								</div>
								<div className="skills">{job.skills}</div>
								<div className="bulkText">{job.bulkText}</div>
							</div>
						);
					})}
				</div>
			) : (
				<ul className="jobsList">
					{jobs.map((job, index) => {
						return (
							<li key={index} className="job">
								<a href={job.url}>{job.position}</a>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default App;
