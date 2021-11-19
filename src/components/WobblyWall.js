import { Plane, MeshWobbleMaterial } from "@react-three/drei";

export default function WobblyWall() {
    return (
        <Plane position={[-6.8, 0, 0]} args={[15, 20, 8]}>
            <MeshWobbleMaterial factor={0.4} />
        </Plane>
    );
}
