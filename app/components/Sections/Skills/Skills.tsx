import styles from './Skills.module.css';
import languages from './languages';
import { ToolboxItem, categories } from './toolbox';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Skills({ shuffledToolboxItems }: { shuffledToolboxItems: ToolboxItem[] }) {
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

	const mainHueOfCategory = (category: string): string => {
		if (category === "BackEnd") {
			return "221";
		} else if (category === "FrontEnd") {
			return "360";
		} else if (category === "Blockchain") {
			return "274";
		} else {
			return "120";
		}
	}

	const mainColourOfCategory = (category: string): string => {
		if (category === "BackEnd") {
			return "hsla(221, 80%, 44%, 0.45)";
		} else if (category === "FrontEnd") {
			return "hsla(360, 52%, 50%, 0.45)";
		} else if (category === "Blockchain") {
			return "hsla(274, 63%, 50%, 0.45)";
		} else {
			return "hsla(120, 72%, 45%, 0.45)";
		}

	}

	const randomColourPerCategory = (category: string): string => {
		const mainHue = mainHueOfCategory(category);
		const l = Math.floor(Math.random() * (50 - 20 + 1) + 20);
		const s = Math.floor(Math.random() * (80 - 50 + 1) + 50);
		return `hsla(${mainHue}, ${s}%, ${l}%, 0.45)`;
	}

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
					<li>Python</li>
					<li>Typescript</li>
				</ul>
			</div>
			<div className={styles.toolboxWrapper}>
				<h2>
					And I&lsquo;m handy with:
				</h2>
				<div className={styles.toolbox}>
					{
						shuffledToolboxItems.map((item, index) => {
							return (
								<div key={index} className={styles.tool} style={{ "--color": randomColourPerCategory(item.category) } as React.CSSProperties}>
									<span>{item.name}</span>
								</div>
							)
						})
					}
				</div>
				<div className={styles.toolboxLegend}>
					{
						categories.map((category, index) => {
							return (
								<div key={index} className={styles.legendItem}>
									<div className={styles.rectangle} style={{ "--color": mainColourOfCategory(category) } as React.CSSProperties} />
									<span>{category}</span>
								</div>
							)
						})
					}
				</div>
			</div>
		</div >
	)
}