'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import styles from './Toolbox.module.css';
import { toolboxItems, categories, ToolboxItem, Category } from './toolbox.constants';
import { randomColourPerCategory, mainColourOfCategory, shuffle } from '@/app/utils';

export default function Toolbox() {
	const [shuffledToolboxItems, setShuffledToolboxItems] = useState<ToolboxItem[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setShuffledToolboxItems(shuffle(toolboxItems));
	}, []);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
				setSelectedCategory(null);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const getStaggerIndex = (item: ToolboxItem): number => {
		if (!selectedCategory) return 0;
		const isSelected = item.category === selectedCategory;
		const group = shuffledToolboxItems.filter(i =>
			isSelected ? i.category === selectedCategory : i.category !== selectedCategory
		);
		return group.indexOf(item);
	};

	return (
		<div className={styles.toolboxWrapper} ref={wrapperRef}>
			<h2>And I&lsquo;m handy with:</h2>

			<LayoutGroup>
				{/* Selected section */}
				<div className={styles.selectedSection}>
					<motion.div className={styles.selectedToolbox}>
						{shuffledToolboxItems
							.filter(item => item.category === selectedCategory)
							.map((item) => {
								const staggerIndex = getStaggerIndex(item);
								return (
									<motion.div
										key={item.name}
										layoutId={item.name}
										transition={{
											layout: {
												type: 'spring',
												stiffness: 400,
												damping: 30,
												delay: staggerIndex * 0.04,
											},
										}}
										className={styles.tool}
										style={{ '--color': randomColourPerCategory(item.category) } as React.CSSProperties}
										onClick={() => setSelectedCategory(item.category)}
										whileHover={{ scale: 1.1 }}
									>
										<span>{item.name}</span>
									</motion.div>
								);
							})}
					</motion.div>

					{selectedCategory && <div className={styles.divider} />}
				</div>

				{/* Unselected section */}
				<motion.div className={styles.toolbox}>
					{shuffledToolboxItems
						.filter(item => selectedCategory ? item.category !== selectedCategory : true)
						.map((item) => {
							const staggerIndex = getStaggerIndex(item);
							return (
								<motion.div
									key={item.name}
									layoutId={item.name}
									transition={{
										layout: {
											type: 'spring',
											stiffness: 400,
											damping: 30,
											delay: staggerIndex * 0.04,
										},
									}}
									animate={{
										opacity: selectedCategory ? 0.5 : 1,
									}}
									className={styles.tool}
									style={{ '--color': randomColourPerCategory(item.category) } as React.CSSProperties}
									onClick={() => setSelectedCategory(item.category)}
									whileHover={{ scale: 1.1 }}
								>
									<span>{item.name}</span>
								</motion.div>
							);
						})}
				</motion.div>
			</LayoutGroup>

			<div className={styles.toolboxLegend}>
				{categories.map((category) => (
					<motion.div
						key={category}
						className={styles.legendItem}
						onClick={() => setSelectedCategory(category)}
						animate={{ scale: selectedCategory === category ? 1.1 : 1 }}
						whileHover={{ scale: 1.1 }}
					>
						<div
							className={styles.rectangle}
							style={{ '--color': mainColourOfCategory(category) } as React.CSSProperties}
						/>
						<span>{category}</span>
					</motion.div>
				))}
			</div>
		</div>
	);
}