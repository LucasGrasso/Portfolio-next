import TDCanvas from "../../3DCanvas/3DCanvas"
import styles from './Home.module.css';


export default function Home() {
	return (
		<>
			<div className={styles.home}>
				<div className={styles.canvas} style={{ pointerEvents: "none", display: "flex" }}>
					<TDCanvas />
				</div>

				<div className={styles.info}>
					<h1>
						Lucas Grasso Ramos
					</h1>
					<span className={styles.subtitle}>
						Blockchain & Full-stack Dev.
					</span>
				</div>
			</div >
		</>
	)
}