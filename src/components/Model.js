import { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const Model = () => {
	const carRef = useRef();
	
	useFrame(({clock}) => {
		const elapsedTime = clock.getElapsedTime();
		carRef.current.rotation.y = -elapsedTime / 2;
	})
	
	const obj = useLoader(OBJLoader, './models/golf.obj');
	return (
			<primitive ref={carRef} object={obj} rotation={[0,0,0]} position={[-1, 0, 0]}/>
	)};

export default Model;
