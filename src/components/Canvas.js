import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Plane } from "@react-three/drei";

import Model from "./Model";
import Lights from "./examples/Lights";

export default function CanvasBase() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10] }}>
						<OrbitControls/>
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <Suspense fallback={null}>
								<Stars/>
								<Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} scale={[4.2,4.2,4.2]}/>
        <Model />
        <Lights />
      </Suspense>
    </Canvas>
  );
}
