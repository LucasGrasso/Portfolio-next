import styles from './Projects.module.css';
import { projects } from './projectsInfo';

export default function Projects() {
	return (
		<div className={styles.wrapper} id="projects">
			<h2 className={styles.title}>
				Some of my projects:
			</h2>
			<div className={styles.projectsOuterWrapper}>
				<div className={styles.projectsWrapper}>
					{
						projects.map(project => {
							return (
								<div key={project.title} className={styles.project}>
									<div>
										<h2>
											{project.title}
										</h2>
										<p>
											{project.description}
										</p>
									</div>
									<a href={project.url} target="_blank" rel="noreferrer">
										{project.url}
									</a>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	);
}