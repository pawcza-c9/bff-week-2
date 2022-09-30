import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Track() {
  const texture = useLoader(THREE.TextureLoader, "trackimage.jpeg");
  return (
    <mesh rotation={[Math.PI / -2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 75]} />
      <meshPhongMaterial attach="material" map={texture} />
    </mesh>
    //   <mesh position={[0, 0, 0]}  scale={[1, 1, 1]}>
    //   {/*
    //     The thing that gives the mesh its shape
    //     In this case the shape is a flat plane
    //   */}
    //   <planeBufferGeometry />
    //   {/*
    //     The material gives a mesh its texture or look.
    //     In this case, it is just a uniform green
    //   */}
    //   <meshBasicMaterial color="green" side={DoubleSide} />
    // </mesh>
  );
}
