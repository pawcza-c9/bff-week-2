import * as THREE from "three";
import React, { useMemo } from "react";
import { Effects as EffectsComposer } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import { UnrealBloomPass } from "three-stdlib";

extend({ UnrealBloomPass });

export default function Effects() {
    const { size, scene, camera } = useThree();
    const aspect = useMemo(
        () => new THREE.Vector2(size.width, size.height),
        [size]
    );

    return (
        <EffectsComposer
            multisamping={3}
            renderIndex={1}
            disableGamma
            disableRenderPass
        >
            <renderPass attachArray="passes" scene={scene} camera={camera} />
            <unrealBloomPass
                attachArray="passes"
                args={[aspect, 0.8, 0.5, 0]}
            />
        </EffectsComposer>
    );
}
