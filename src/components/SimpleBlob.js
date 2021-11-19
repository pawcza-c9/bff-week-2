import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function SimpleBlob() {
    return (
        <Sphere visible position={[2.2, 0, 5]} args={[1.2, 16, 200]}>
            <MeshDistortMaterial
                roughness={1}
                speed={2}
                attach="material"
                color="blue"
                distort={0.2}
            />
        </Sphere>
    );
}
