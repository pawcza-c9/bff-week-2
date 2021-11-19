import { extend, useThree } from "@react-three/fiber";

export default function Blob() {
    return (
        <mesh
            position={[-1.5, 0, 6]} // The position on the canvas of the object [x,y,x]
            rotation={[0, 0, 0]}
            castShadow
        >
            {/* A spherical shape*/}
            <sphereGeometry attach="geometry" args={[1, 16, 200]} />
            <meshStandardMaterial
                attach="material" // How the element should attach itself to its parent
                color="#111111" // The color of the material
                transparent // Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects. When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
                roughness={0.1} // The roughness of the material - Defaults to 1
                metalness={0.1} // The metalness of the material - Defaults to 0
                opacity={1} // The opacity of the material - Defaults to 1
            />
        </mesh>
    );
}
