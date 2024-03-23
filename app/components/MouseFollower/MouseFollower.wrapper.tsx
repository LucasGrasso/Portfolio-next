'use client'

import { useEffect, useState } from "react";
import MouseFollower from "./MouseFollower";

export default function MouseFollowerWrapper() {
	const [isNotMobile, setIsNotMobile] = useState(true);

	useEffect(() => {
		setIsNotMobile(window.innerWidth > 768);
	}, []);

	return (
		<>
			{isNotMobile && <MouseFollower />}
		</>
	)
}