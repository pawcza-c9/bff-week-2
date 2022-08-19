import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Golf from './Golf';
import FreeCar from './FreeCar';
import Lights from "./examples/Lights";

export default function CanvasBase() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10] }}>
			<OrbitControls makeDefault/>
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <Suspense fallback={null}>
				{/*<Stars/>*/}
				{/*<Golf/>*/}
				{/*<Model />*/}
				<FreeCar/>
        <Lights />
      </Suspense>
    </Canvas>
  );
}
