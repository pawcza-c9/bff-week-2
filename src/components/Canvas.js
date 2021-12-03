import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Model from "./Model";
import Lights from "./examples/Lights";

export default function CanvasBase() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10] }}>
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
        <Lights />
      </Suspense>
    </Canvas>
  );
}
