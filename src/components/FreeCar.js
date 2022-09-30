/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const keyCodes = {
  backward: "ArrowDown",
  forward: "ArrowUp",
  left: "ArrowLeft",
  right: "ArrowRight",
};

export default function FreeCar({ ...props }) {
  const group = useRef();
  const wheelsRefFR = useRef();
  const wheelsRefFL = useRef();
  const wheelsRefBR = useRef();
  const wheelsRefBL = useRef();
  const doorsLRef = useRef();

  const { nodes, materials } = useGLTF("./models/free_car.gltf");

  const [isPressing, setIsPressing] = useState({
    backward: false,
    forward: false,
    left: false,
    right: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [wheelAngle, setWheelAngle] = useState(0);

  const onKeyDown = (e) => {
    setIsPressing((prev) => {
      const newVal = { ...prev };

      if (e.code === keyCodes.backward) newVal[keyCodes.backward] = true;
      if (e.code === keyCodes.forward) newVal[keyCodes.forward] = true;
      if (e.code === keyCodes.left) newVal[keyCodes.left] = true;
      if (e.code === keyCodes.right) newVal[keyCodes.right] = true;

      return newVal;
    });
  };

  const onKeyUp = (e) => {
    setIsPressing((prev) => {
      const newVal = { ...prev };

      if (e.code === keyCodes.backward) newVal[keyCodes.backward] = false;
      if (e.code === keyCodes.forward) newVal[keyCodes.forward] = false;
      if (e.code === keyCodes.left) newVal[keyCodes.left] = false;
      if (e.code === keyCodes.right) newVal[keyCodes.right] = false;

      return newVal;
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  useFrame(({ clock }) => {
    // Rotating wheels

    if (isPressing[keyCodes.forward]) {
      group.current.position.z += Math.PI / 30;
      group.current.position.x += ((Math.PI / 30) * wheelAngle) / 35;
      wheelsRefFL.current.rotation.z += Math.PI / 30;
      wheelsRefFR.current.rotation.z += Math.PI / 30;
      wheelsRefBL.current.rotation.z += Math.PI / 30;
      wheelsRefBR.current.rotation.z += Math.PI / 30;
    }

    if (isPressing[keyCodes.backward]) {
      group.current.position.z -= Math.PI / 30;
      group.current.position.x -= ((Math.PI / 30) * wheelAngle) / 35;
      wheelsRefFL.current.rotation.z -= Math.PI / 30;
      wheelsRefFR.current.rotation.z -= Math.PI / 30;
      wheelsRefBL.current.rotation.z -= Math.PI / 30;
      wheelsRefBR.current.rotation.z -= Math.PI / 30;
    }

    if (isPressing[keyCodes.left]) {
      setWheelAngle((prevAngle) => {
        if (prevAngle <= 45 && prevAngle >= -45) {
          return prevAngle + 0.5;
        } else {
          return prevAngle;
        }
      });
    }

    if (isPressing[keyCodes.right]) {
      setWheelAngle((prevAngle) => {
        if (prevAngle <= 45 && prevAngle >= -45) {
          return prevAngle - 0.5;
        } else {
          return prevAngle;
        }
      });
    }

    if (!isPressing[keyCodes.left] && !isPressing[keyCodes.right]) {
      setWheelAngle((prevAngle) => {
        if (prevAngle > 0) {
          return prevAngle - 1;
        } else if (prevAngle < 0) {
          return prevAngle + 1;
        } else {
          return 0;
        }
      });
    }

    // Opening & Closing doors
    let currentRotation = doorsLRef.current.rotation.x;
    let currentPosition = doorsLRef.current.position;

    if (isOpen) {
      if (currentRotation < 1.5) doorsLRef.current.rotation.x += Math.PI / 300;
      // if (currentPosition.z > -1.5) doorsLRef.current.position.z += Math.PI / 60;
      // if (currentPosition.y < 3) doorsLRef.current.position.y += Math.PI / 30;
    } else {
      if (currentRotation > 0) doorsLRef.current.rotation.x -= Math.PI / 300;
      // if (currentPosition.z < -2) doorsLRef.current.position.z -= Math.PI / 60;
      // if (currentPosition.y > 2) doorsLRef.current.position.y -= Math.PI / 30;
    }
  });

  useEffect(() => {
    // console.log("🟢", "wheelAnge", "👉🏽", wheelAngle);
  }, [wheelAngle]);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.car_body.geometry}
        material={nodes.car_body.material}
      >
        <mesh
          geometry={nodes.door_l.geometry}
          material={nodes.door_l.material}
          position={[0.91, 0.68, 0.64]}
          onClick={() => setIsOpen(!isOpen)}
          ref={doorsLRef}
        >
          <mesh
            geometry={nodes.win_door_l001.geometry}
            material={nodes.win_door_l001.material}
            position={[-0.15, 0.7, -0.73]}
          />
        </mesh>
        <mesh
          geometry={nodes.door_r.geometry}
          material={nodes.door_r.material}
          position={[-0.91, 0.68, 0.64]}
        >
          <mesh
            geometry={nodes.win_door_r001.geometry}
            material={nodes.win_door_r001.material}
            position={[0.15, 0.7, -0.73]}
          />
        </mesh>
        <mesh
          geometry={nodes.free_number.geometry}
          material={nodes.free_number.material}
          position={[0, 0.79, -1.77]}
        />
        <mesh
          geometry={nodes.interior.geometry}
          material={nodes.interior.material}
          position={[0.94, 0.6, -0.07]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.44, 0.4, 0.4]}
        />
        <mesh
          ref={wheelsRefBL}
          geometry={nodes.wheel_bl.geometry}
          material={nodes.wheel_bl.material}
          position={[0.78, 0.33, -1.24]}
          rotation={[0, 1.57, 0]}
          scale={0.32}
        />
        <mesh
          ref={wheelsRefBR}
          geometry={nodes.wheel_br.geometry}
          material={nodes.wheel_br.material}
          position={[-0.78, 0.33, -1.24]}
          rotation={[0, 1.57, 0]}
          scale={0.32}
        />
        <mesh
          ref={wheelsRefFL}
          geometry={nodes.wheel_fl.geometry}
          material={nodes.wheel_fl.material}
          position={[0.78, 0.33, 1.07]}
          rotation={[0, 1.57, 0]}
          scale={0.32}
        />
        <mesh
          ref={wheelsRefFR}
          geometry={nodes.wheel_fr.geometry}
          material={nodes.wheel_fr.material}
          position={[-0.78, 0.33, 1.07]}
          rotation={[0, 1.57, 0]}
          scale={0.32}
        />
        <mesh
          geometry={nodes.windows.geometry}
          material={nodes.windows.material}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/free_car.gltf");
