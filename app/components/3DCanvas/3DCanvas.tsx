'use client'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { useState, useRef, useEffect, MutableRefObject } from "react";
import AsciiRenderer from "../3DComponents/AcsiiRenderer";
import Mountain from "../3DComponents/Mountain";
import styles from './3DCanvas.module.css';
import { Vector3 } from "three";
import { MountainAcsiiArt } from "./3dCanvas.constants";

export default function TDCanvas() {
	const [isWebGLSupported, setIsWebGLSupported] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	const [color,] = useState("FFFFFFF");

	const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

	useEffect(() => {
		const canvas = document.createElement("canvas");
		const gl = canvas.getContext("webgl")
			|| canvas.getContext("experimental-webgl");

		const b = gl instanceof WebGLRenderingContext;
		setIsWebGLSupported(!!gl && b)
	}, []);

	useEffect(() => {
		setIsMobile(window.innerWidth < 768);
	}, []);

	const defaultCameraPosition = new Vector3(0, 0, 5);
	const defaultTarget = new Vector3(-0.19672038989012175, 0.34252186707017224, -0.19084934552398422);
	const desiredDistance = 2.8130368240544836;

	const mobileDefaultTarget = new Vector3(-0.19672038989012175, 1, -0.19084934552398422);
	const mobileDesiredDistance = 5;

	const defaultTargetPosition = isMobile ? mobileDefaultTarget : defaultTarget;
	const desiredDistancePosition = isMobile ? mobileDesiredDistance : desiredDistance;


	return (
		<>
			{
				isWebGLSupported
					? (
						<div className={styles.canvasWrapper}>
							<Canvas className={styles.canvas}>
								<color attach="background" args={['black']} />
								<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
								<pointLight position={[-10, -10, -10]} />
								<Mountain />
								<PerspectiveCamera
									makeDefault
									position={defaultCameraPosition}
									ref={cameraRef}
								/>
								<OrbitControls
									enableDamping={false}
									enablePan={false}
									enableZoom={false}
									enableRotate={false}
									maxPolarAngle={Math.PI / 2}
									minPolarAngle={Math.PI / 2}
									minDistance={desiredDistancePosition}
									maxDistance={desiredDistancePosition}
									target={defaultTargetPosition}
									camera={cameraRef.current || undefined}
								/>
								<AsciiRenderer fgColor={color} bgColor="black" />
							</Canvas>
						</div>
					)
					: (
						<div className={styles.noWebGlWrapper}>
							<MountainAcsiiArt />
						</div>
					)
			}
		</>
	);
}
