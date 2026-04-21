'use client'

import { useEffect, useState } from "react";
import MouseFollower from "./MouseFollower";

export default function MouseFollowerWrapper() {
	const [isNotMobile, setIsNotMobile] = useState(true);

	useEffect(() => {
		setIsNotMobile(window.innerWidth > 768);
	}, []);

	useEffect(() => {
		if (!isNotMobile) {
			return;
		}

		document.body.classList.add('custom-cursor-active');

		return () => {
			document.body.classList.remove('custom-cursor-active');
		};
	}, [isNotMobile]);

	return (
		<>
			{isNotMobile && <MouseFollower />}
		</>
	)
}