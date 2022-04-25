import { useState } from 'react';
import './App.scss';
import _jobs from './data/jobs.json';

_jobs.forEach((job) => {
	job.status = 'send';
});

const statuses = ['send', 'wait', 'interview', 'declined', 'accepted'];

function App() {
	const [displayKind, setDisplayKind] = useState('full');
	const [jobs, setJobs] = useState(_jobs);

	const handleToggleView = () => {
		setDisplayKind(displayKind === 'full' ? 'list' : 'full');
	};

	const handleStatusChange = () => {
		console.log('changing status');
	}

	return (
		<div className="App">
			<h1>Job Application Process</h1>
			<button onClick={handleToggleView}>Toggle View</button>
			{displayKind === 'full' ? (
				<div className="jobs">
					{jobs.map((job, index) => {
						return (
							<div key={index} className="job">
								<div className="header">
									<div className="position">
										<a href={job.url}>{job.position}</a>
									</div>
									<button onClick={handleStatusChange} className="status">{job.status}</button>
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
