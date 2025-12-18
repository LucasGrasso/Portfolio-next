'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react';
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

	const selectedItems = useMemo(() => {
		if (!selectedCategory) return [];
		return shuffledToolboxItems.filter(
			item => item.category === selectedCategory
		);
	}, [shuffledToolboxItems, selectedCategory]);

	const unselectedItems = useMemo(() => {
		if (!selectedCategory) return shuffledToolboxItems;
		return shuffledToolboxItems.filter(
			item => item.category !== selectedCategory
		);
	}, [shuffledToolboxItems, selectedCategory]);

	return (
		<div className={styles.toolboxWrapper} ref={wrapperRef}>
			<h2>And I&lsquo;m handy with:</h2>

			<LayoutGroup>
				{/* Selected section */}
				<div className={styles.selectedSection} style={{ height: selectedItems.length > 0 ? 80 : undefined }}>
					{selectedItems.length > 0 && (
						<>
							<motion.div
								className={styles.toolbox}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.2 }}
							>
								{selectedItems.map((item, index) => (
									<motion.div
										key={item.name + item.category}
										layoutId={item.name + item.category}
										transition={{
											layout: {
												type: 'spring',
												stiffness: 500,
												damping: 35,
												delay: index * 0.03,
											},
										}}
										className={styles.tool}
										style={{ '--color': randomColourPerCategory(item.category) } as React.CSSProperties}
										onClick={() => setSelectedCategory(item.category)}
										whileHover={{ scale: 1.1 }}
									>
										<span>{item.name}</span>
									</motion.div>
								))}
							</motion.div>
							<div className={styles.divider} />
						</>
					)}
				</div>

				{/* Unselected section */}
				<motion.div className={styles.toolbox} layout>
					{unselectedItems.length > 0 && (unselectedItems.map((item, index) => (
						<motion.div
							key={item.name + item.category}
							layoutId={item.name + item.category}
							transition={{
								layout: {
									type: 'spring',
									stiffness: 500,
									damping: 35,
									delay: index * 0.03,
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
					)))}
				</motion.div>
			</LayoutGroup>

			<div className={styles.toolboxLegend}>
				{categories.map((category) => (
					<motion.div
						key={category}
						className={styles.legendItem}
						onClick={() => setSelectedCategory(category)}
						animate={{ scale: selectedCategory === category ? 1.1 : 1, opacity: selectedCategory && selectedCategory !== category ? 0.5 : 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{
							opacity: { duration: 0.25, ease: 'easeOut' },
							scale: { duration: 0.2, ease: 'easeOut' },
						}}
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