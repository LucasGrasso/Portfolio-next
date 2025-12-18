'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import styles from './Toolbox.module.css';
import { toolboxItems, categories, ToolboxItem, Category } from './toolbox.constants';
import { randomColourPerCategory, mainColourOfCategory, shuffle } from '@/app/utils';

export default function Toolbox() {
	const [shuffledToolboxItems, setShuffledToolboxItems] = useState<ToolboxItem[]>([]);
	const [colorMap, setColorMap] = useState<Record<string, string>>({});
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setShuffledToolboxItems(shuffle(toolboxItems));
	}, []);

	useEffect(() => {
		let temp: Record<string, string> = {};
		toolboxItems.map(item => {
			temp[item.name + item.category] = randomColourPerCategory(item.category);
		});
		setColorMap(temp);
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

	const ToolItem = React.memo(function ToolItem({
		item,
		index,
		dimmed,
		onClick,
	}: {
		item: ToolboxItem;
		index: number;
		dimmed: boolean;
		onClick: () => void;
	}) {
		return (
			<motion.div
				layoutId={item.name + item.category}
				className={styles.tool}
				animate={{ opacity: dimmed ? 0.5 : 1 }}
				whileHover={{ scale: 1.1 }}
				transition={{
					layout: {
						type: 'spring',
						stiffness: 500,
						damping: 35,
						delay: index * 0.005,
					},
				}}
				style={{ '--color': colorMap[item.name + item.category] } as React.CSSProperties}
				onClick={onClick}
			>
				<span>{item.name}</span>
			</motion.div>
		);
	});


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
									<ToolItem
										key={item.name + item.category}
										index={index}
										item={item}
										dimmed={false}
										onClick={() => setSelectedCategory(item.category)}
									/>
								))}
							</motion.div>
							<div className={styles.divider} />
						</>
					)}
				</div>

				{/* Unselected section */}
				<motion.div className={styles.toolbox} layout>
					{unselectedItems.length > 0 && (unselectedItems.map((item, index) => (
						<ToolItem
							key={item.name + item.category}
							index={index}
							item={item}
							dimmed={!!selectedCategory}
							onClick={() => setSelectedCategory(item.category)}
						/>
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