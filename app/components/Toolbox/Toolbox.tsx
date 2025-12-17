'use client'
import React, { useState, useEffect } from 'react';
import styles from './Toolbox.module.css';
import { toolboxItems, categories, ToolboxItem, Category } from './toolbox.constants';
import { randomColourPerCategory, mainColourOfCategory, shuffle } from '@/app/utils';


export default function Toolbox() {
	const [shuffledToolboxItems, setShuffledToolboxItems] = useState<ToolboxItem[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

	useEffect(() => {
		setShuffledToolboxItems(shuffle(toolboxItems));
	}, []);

	return (
		<div className={styles.toolboxWrapper}>
			<h2>
				And I&lsquo;m handy with:
			</h2>
			<div className={styles.toolbox}>
				{
					shuffledToolboxItems.map((item, index) => {
						return (
							<div key={index} className={styles.tool} style={{ "--color": randomColourPerCategory(item.category) } as React.CSSProperties} onClick={(_e) => setSelectedCategory(item.category)}>
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
							<div key={index} className={styles.legendItem} onClick={(_e) => setSelectedCategory(category)}>
								<div className={styles.rectangle} style={{ "--color": mainColourOfCategory(category) } as React.CSSProperties} />
								<span>{category}</span>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}