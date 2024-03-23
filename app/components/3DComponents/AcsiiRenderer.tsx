import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useLayoutEffect, useMemo } from 'react'
import { AsciiEffect } from 'three-stdlib'

export default function AsciiRenderer({
	renderIndex = 1,
	bgColor = 'black',
	fgColor = 'white',
	characters = ' .:-+*=%@#',
	invert = true,
	color = false,
	resolution = 0.15,
	willReadFrequently = true,
}) {
	// Reactive state
	const { size, gl, scene, camera } = useThree()
	gl.domElement.getContext("2d", { willReadFrequently })

	// Create effect
	const effect = useMemo(() => {
		const effect = new AsciiEffect(gl, characters, { invert, color, resolution })
		effect.domElement.style.position = 'absolute'
		effect.domElement.style.top = '0px'
		effect.domElement.style.left = '0px'
		effect.domElement.style.pointerEvents = 'none'
		return effect
	}, [characters, invert, color, resolution, gl])

	// Styling
	useLayoutEffect(() => {
		effect.domElement.style.color = fgColor
		effect.domElement.style.backgroundColor = bgColor
	}, [fgColor, bgColor, effect.domElement.style])

	// Append on mount, remove on unmount
	useEffect(() => {
		gl.domElement.style.opacity = '0'
		if (!gl.domElement.parentNode) return;
		gl.domElement.parentNode.appendChild(effect.domElement)
		return () => {
			gl.domElement.style.opacity = '1'
			gl.domElement.parentNode?.removeChild(effect.domElement)
		}
	}, [effect, gl.domElement, gl.domElement.parentNode])

	// Set size
	useEffect(() => {
		effect.setSize(size.width, size.height)
	}, [effect, size])

	// Take over render-loop (that is what the index is for)
	useFrame(() => {
		effect.render(scene, camera)
	}, renderIndex)

	return <></>
}