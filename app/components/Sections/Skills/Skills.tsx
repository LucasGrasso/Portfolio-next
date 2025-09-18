import styles from './Skills.module.css';
import languages from './languages';
import Toolbox from '../../Toolbox/Toolbox';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Skills() {
	const mathML1 = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
		<mi>Given </mi>
		<mspace width="0.2em"></mspace>
  		<mi>n</mi>
  		<mo>&#8712;</mo>
  		<mi>&#x2115;</mi>
		<mo>,</mo>
  	</math>
  `;

	const mathML2 = `
    <math xmlns="http://www.w3.org/1998/Math/MathML">
		<mi>I'd speak</mi>
		<mspace width="0.2em"></mspace>
		<mi>n</mi>
		<mspace width="0.2em"></mspace>
		<mi>languages</mi>
  	</math>
  `;
	return (
		<div className={styles.wrapper} id="toolbox">
			<div className={styles.titleWrapper}>
				<div className={styles.title}>
					<div dangerouslySetInnerHTML={{ __html: mathML1 }} className={styles.math} />
					<div dangerouslySetInnerHTML={{ __html: mathML2 }} className={styles.math} />
				</div>
				<span>...If i could.</span>
			</div>
			<div className={styles.animationOuterWrapper}>
				<div className={styles.animationWrapper}>
					<div className={styles.skillsWrapper}>
						{
							languages.map((language, index) => {
								return (
									<div key={index}>
										<SyntaxHighlighter className={styles.language} language={language.language} style={atomDark}>
											{language.text}
										</SyntaxHighlighter>
									</div>
								)
							})
						}
					</div>
					<div className={styles.skillsWrapper}>
						{
							languages.map((language, index) => {
								return (
									<div key={index}>
										<SyntaxHighlighter className={styles.language} language={language.language} style={atomDark}>
											{language.text}
										</SyntaxHighlighter>
									</div>
								)
							})
						}
					</div>
					<div className={styles.skillsWrapper}>
						{
							languages.map((language, index) => {
								return (
									<div key={index}>
										<SyntaxHighlighter className={styles.language} language={language.language} style={atomDark}>
											{language.text}
										</SyntaxHighlighter>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
			<div className={styles.fluentLanguages}>
				<h2>
					But I&lsquo;m the most fluent in:
				</h2>
				<ul className={styles.list}>
					<li>Solidity</li>
					<li>Typescript</li>
					<li>Rust</li>
					<li>Python</li>
				</ul>
			</div>
			<Toolbox />
		</div >
	)
}