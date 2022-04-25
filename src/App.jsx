import './App.scss';
import jobs from './data/jobs.json';

const displayKind = 'list';

function App() {
	return (
		<div className="App">
			<h1>Job Application Process</h1>
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
							<li key={index} className="job"><a href={job.url}>{job.position}</a></li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default App;
