import GithubIcon from '../../assets/icons/GithubIcon';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.icons}>
				<GithubIcon />
				<LinkedInIcon />
			</div>
			<span>
				Lucas Grasso Ramos
			</span>
			<span className={styles.mail}>
				lucasgrassoramos@gmail.com
			</span>
		</div>
	)
}