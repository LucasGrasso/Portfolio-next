import styles from './Figures.module.css';

function ArgCircles() {
	return (
		<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M23.6873 11.8437C23.6873 18.3847 18.3847 23.6873 11.8437 23.6873C5.30259 23.6873 0 18.3847 0 11.8437C0 5.30259 5.30259 0 11.8437 0C18.3847 0 23.6873 5.30259 23.6873 11.8437Z" fill="#74ACDF" />
			<path d="M23.6873 45.531C23.6873 52.0721 18.3847 57.3746 11.8437 57.3746C5.30259 57.3746 0 52.0721 0 45.531C0 38.9899 5.30259 33.6873 11.8437 33.6873C18.3847 33.6873 23.6873 38.9899 23.6873 45.531Z" fill="white" />
			<path d="M23.6873 79.2183C23.6873 85.7594 18.3847 91.062 11.8437 91.062C5.30259 91.062 0 85.7594 0 79.2183C0 72.6772 5.30259 67.3746 11.8437 67.3746C18.3847 67.3746 23.6873 72.6772 23.6873 79.2183Z" fill="#74ACDF" />
			<path d="M57.3748 11.8437C57.3748 18.3847 52.0722 23.6873 45.5312 23.6873C38.9901 23.6873 33.6875 18.3847 33.6875 11.8437C33.6875 5.30259 38.9901 0 45.5312 0C52.0722 0 57.3748 5.30259 57.3748 11.8437Z" fill="#74ACDF" />
			<path d="M57.3748 45.531C57.3748 52.0721 52.0722 57.3746 45.5312 57.3746C38.9901 57.3746 33.6875 52.0721 33.6875 45.531C33.6875 38.9899 38.9901 33.6873 45.5312 33.6873C52.0722 33.6873 57.3748 38.9899 57.3748 45.531Z" fill="#F6B40E" />
			<path d="M57.3748 79.2183C57.3748 85.7594 52.0722 91.062 45.5312 91.062C38.9901 91.062 33.6875 85.7594 33.6875 79.2183C33.6875 72.6772 38.9901 67.3746 45.5312 67.3746C52.0722 67.3746 57.3748 72.6772 57.3748 79.2183Z" fill="#74ACDF" />
			<path d="M91.0613 11.8437C91.0613 18.3847 85.7588 23.6873 79.2177 23.6873C72.6766 23.6873 67.374 18.3847 67.374 11.8437C67.374 5.30259 72.6766 0 79.2177 0C85.7588 0 91.0613 5.30259 91.0613 11.8437Z" fill="#74ACDF" fillOpacity="0.87451" />
			<path d="M91.0613 45.531C91.0613 52.0721 85.7588 57.3746 79.2177 57.3746C72.6766 57.3746 67.374 52.0721 67.374 45.531C67.374 38.9899 72.6766 33.6873 79.2177 33.6873C85.7588 33.6873 91.0613 38.9899 91.0613 45.531Z" fill="white" />
			<path d="M91.0613 79.2183C91.0613 85.7594 85.7588 91.062 79.2177 91.062C72.6766 91.062 67.374 85.7594 67.374 79.2183C67.374 72.6772 72.6766 67.3746 79.2177 67.3746C85.7588 67.3746 91.0613 72.6772 91.0613 79.2183Z" fill="#74ACDF" />
		</svg>

	)
}

function Eth() {
	return (
		<svg width="108" height="109" viewBox="0 0 108 109" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M54.0013 7.948L26.1367 55.6355L54.0013 72.6667L81.8659 55.6355L54.0013 7.948ZM26.1367 61.3126L54.0013 101.052L81.8659 61.3126L54.0013 78.3438L26.1367 61.3126Z" className={styles.color} />
		</svg>
	)

}

function Cross() {
	return (
		<svg width="88" height="87" viewBox="0 0 88 87" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M72.4805 0.012207L44.0731 42.5768L15.6659 0.012207L44.0731 18.1485L72.4805 0.012207Z" className={styles.color} />
			<path d="M15.6658 86.9878L44.0731 44.4232L72.4803 86.9878L44.0731 68.8515L15.6658 86.9878Z" className={styles.color} />
			<path d="M87.627 71.8006L44.923 43.4859L87.627 15.1714L69.4313 43.4859L87.627 71.8006Z" className={styles.color} />
			<path d="M0.65137 71.8006L43.3553 43.4859L0.651367 15.1714L18.847 43.4859L0.65137 71.8006Z" className={styles.color} />
		</svg>
	)

}

export default function Figures() {
	return (
		<div className={styles.figureWrapper}>
			<Cross />
			<Eth />
			<ArgCircles />
		</div>
	)
}