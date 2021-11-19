import * as React from "react";
import { useFrame } from "@react-three/fiber";

export default function Box() {
  const ref = React.useRef();

  return (
    <mesh position={[0, 0, 3]} ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhongMaterial color={"blue"} attach="material" />
    </mesh>
  );
}
