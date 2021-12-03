import { useLoader, extend } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/models/car/scene.gltf");
  return (
    <>
      <primitive position={[0, 0, 0]} object={gltf.scene} scale={1} />
    </>
  );
};

export default Model;
