import { useEffect, useRef } from "react";
import styles from './MouseFollower.module.css';

const MouseFollower = () => {
	const ringRef = useRef<HTMLDivElement | null>(null);
	const glyphRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		let targetX = window.innerWidth / 2;
		let targetY = window.innerHeight / 2;
		let ringX = targetX;
		let ringY = targetY;
		let frameId = 0;
		let swapTimeout = 0;
		const interactiveSelector = 'a, button, [role="button"], input, textarea, select, label, [data-cursor="interactive"]';

		const isInteractiveTarget = (target: EventTarget | null) => {
			let element = target as HTMLElement | null;

			while (element && element !== document.body) {
				if (element.matches(interactiveSelector)) {
					return true;
				}

				if (window.getComputedStyle(element).cursor === 'pointer') {
					return true;
				}

				element = element.parentElement;
			}

			return false;
		};

		const updateCursor = (e: MouseEvent) => {
			targetX = e.clientX;
			targetY = e.clientY;

			if (!glyphRef.current) {
				return;
			}

			glyphRef.current.style.left = `${targetX}px`;
			glyphRef.current.style.top = `${targetY}px`;

			const isInteractive = isInteractiveTarget(e.target);
			const nextChar = isInteractive ? '*' : '.';

			glyphRef.current.classList.toggle(styles.interactive, isInteractive);

			if (glyphRef.current.textContent !== nextChar) {
				glyphRef.current.textContent = nextChar;
				glyphRef.current.classList.add(styles.charSwap);
				window.clearTimeout(swapTimeout);
				swapTimeout = window.setTimeout(() => {
					glyphRef.current?.classList.remove(styles.charSwap);
				}, 140);
			}
		};

		const animateRing = () => {
			if (ringRef.current) {
				ringX += (targetX - ringX) * 0.14;
				ringY += (targetY - ringY) * 0.14;

				ringRef.current.style.left = `${ringX}px`;
				ringRef.current.style.top = `${ringY}px`;
			}

			frameId = window.requestAnimationFrame(animateRing);
		};

		document.body.addEventListener("mousemove", updateCursor, {
			passive: true
		});
		animateRing();

		return () => {
			document.body.removeEventListener("mousemove", updateCursor);
			window.cancelAnimationFrame(frameId);
			window.clearTimeout(swapTimeout);
		};
	}, []);

	return (
		<>
			<div ref={ringRef} className={styles.cursorRing}></div>
			<div ref={glyphRef} className={styles.cursorGlyph}>.</div>
		</>
	);
};

export default MouseFollower;
