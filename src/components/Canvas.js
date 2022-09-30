import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import FreeCar from "./FreeCar";
import Model from "./Model";
import Golf from "./Golf";
import Wheel from "./Wheel";
import Track from "./Track";

import Lights from "./examples/Lights";

export default function CanvasBase() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10] }}>
      <OrbitControls makeDefault />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <Suspense fallback={null}>
        <Track />
        {/*<Stars/>*/}
        {/*<Golf/>*/}
        {/*<Model />*/}
        {/*<Wheel/>*/}
        <FreeCar />
        <Lights />
      </Suspense>
    </Canvas>
  );
}
