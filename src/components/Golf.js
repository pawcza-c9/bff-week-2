/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect } from "react";
import { useGLTF, TransformControls, Edges } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import THREE from "three";

const Golf = ({ curretRotation }) => {
	const group = useRef();
	const wheelsRefFR = useRef();
	const wheelsRefFL = useRef();
	const wheelsRefRR = useRef();
	const wheelsRefRL = useRef();
	const carRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [xPos, setXPos] = useState(0);
	const [yPos, setYPos] = useState(0);
	
	const [isPressing, setIsPressing] = useState("");
	
	const onKeyDown = (e) => {
		if (e.keyCode === 40) setIsPressing("backward");
		if (e.keyCode === 38) setIsPressing("forward");
	};
	
	const onKeyUp = () => {
		setIsPressing("");
	};
	
	const resetPos = () => {
		setXPos(0);
		setYPos(0);
	}
	
	// const getObjectSizeInViewSpace = (object) => {
	//   const size = new THREE.Vector3();
	//   const box = new THREE.Box3().setFromObject(object).getSize(size);
	//   size.project(this.camera);
	
	//   let halfWidth = window.innerWidth / 2;
	//   let halfHeight = window.innerHeight / 2;
	
	//   size.x = size.xhalfWidth;
	//   size.y = size.yhalfHeight;
	
	//   return new THREE.Vector2(size.x, size.y);
	// };
	
	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);
		
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
		};
		
		wheelsRefFL.geometry.translate(100, 50 ,0);
	}, []);
	
	useFrame(({ clock }) => {
		switch (isPressing) {
			case "forward":
				// carRef.current.position.x -= 1;
				wheelsRefFL.current.rotation.z -= Math.PI / 30;
				wheelsRefFR.current.rotation.z -= Math.PI / 300;
				wheelsRefRL.current.rotation.z -= Math.PI / 300;
				wheelsRefRR.current.rotation.z -= Math.PI / 300;
				break;
			case "backward":
				// carRef.current.position.x += 1;
				break;
			default:
				break;
		}
		
		let currentRotation = group.current.rotation.y;
		let currentPosition = group.current.position;
		
		if (isOpen) {
			if (currentRotation > -1) group.current.rotation.y -= Math.PI / 300;
			if (currentPosition.x > -15) group.current.position.x += Math.PI / 60;
			if (currentPosition.z < 30) group.current.position.z += Math.PI / 30;
		} else {
			if (currentRotation < 0) group.current.rotation.y += Math.PI / 300;
			if (currentPosition.x < -20) group.current.position.x -= Math.PI / 60;
			if (currentPosition.z > 20) group.current.position.z -= Math.PI / 30;
		}
	});
	
	const { nodes, materials } = useGLTF("./models/golf.gltf");
	return (
		<group ref={carRef} dispose={null}>
			<mesh
				geometry={nodes["294_002"].geometry}
				material={nodes["294_002"].material}
			/>
			<mesh geometry={nodes.V_002.geometry} material={nodes.V_002.material} />
			<mesh
				geometry={nodes.W0B_002.geometry}
				material={nodes.W0B_002.material}
			/>
			<mesh geometry={nodes.__002.geometry} material={nodes.__002.material} />
			<mesh
				geometry={nodes.Plate_32_1_002.geometry}
				material={nodes.Plate_32_1_002.material}
			/>
			<mesh
				geometry={nodes["294_001"].geometry}
				material={nodes["294_001"].material}
			/>
			<mesh geometry={nodes.V_001.geometry} material={nodes.V_001.material} />
			<mesh
				geometry={nodes.W0B_001.geometry}
				material={nodes.W0B_001.material}
			/>
			<mesh geometry={nodes.__001.geometry} material={nodes.__001.material} />
			<mesh
				geometry={nodes.Plate_32_1_001.geometry}
				material={nodes.Plate_32_1_001.material}
			/>
			<mesh
				geometry={nodes.Component_2_002.geometry}
				material={nodes.Component_2_002.material}
			/>
			<mesh
				geometry={nodes.Driving_Lamps_002.geometry}
				material={nodes.Driving_Lamps_002.material}
			/>
			<mesh
				geometry={nodes.Component_2_001.geometry}
				material={nodes.Component_2_001.material}
			/>
			<mesh
				geometry={nodes.Driving_Lamps_001.geometry}
				material={nodes.Driving_Lamps_001.material}
			/>
			<mesh
				geometry={nodes.Component_1_001.geometry}
				material={nodes.Component_1_001.material}
			/>
			
			{/*LEFT FRONT_DOOR*/}
			<group
				ref={group}
				position={[-20, 0, 20]}
				onClick={() => setIsOpen(!isOpen)}
			>
				<mesh position={[20, 0, -20]}>
					<mesh
						geometry={nodes.Side_Panels_003.geometry}
						material={nodes.Side_Panels_003.material}
					/>
					<mesh
						geometry={nodes.Door_Window_002.geometry}
						material={nodes.Door_Window_002.material}
					/>
					<mesh
						geometry={nodes.Mirrors_002.geometry}
						material={nodes.Mirrors_002.material}
					/>
					<mesh
						geometry={nodes.door_rf_ok_002.geometry}
						material={nodes.door_rf_ok_002.material}
					/>
				</mesh>
			</group>
			
			<group ref={wheelsRefFR}>
				<mesh
					geometry={nodes.wheel_4_004.geometry}
					material={nodes.wheel_4_004.material}
				/>
			</group>
			<group ref={wheelsRefRR}>
				<mesh
					geometry={nodes.wheel_4_003.geometry}
					material={nodes.wheel_4_003.material}
				/>
			</group>
			<group ref={wheelsRefRL}>
				<mesh
					geometry={nodes.wheel_4_002.geometry}
					material={nodes.wheel_4_002.material}
				/>
			</group>
			<group ref={wheelsRefFL}>
					<mesh
						geometry={nodes.wheel_4_001.geometry}
						material={nodes.wheel_4_001.material}
					/>
			</group>
			<mesh
				geometry={nodes.windscre01_001.geometry}
				material={nodes.windscre01_001.material}
			/>
			<mesh
				geometry={nodes.lempu_stik_001.geometry}
				material={nodes.lempu_stik_001.material}
			/>
			<mesh
				geometry={nodes.Side_Panels_001.geometry}
				material={nodes.Side_Panels_001.material}
			/>
			<mesh
				geometry={nodes.Door_Window_001.geometry}
				material={nodes.Door_Window_001.material}
			/>
			<mesh
				geometry={nodes.Mirrors_001.geometry}
				material={nodes.Mirrors_001.material}
			/>
			<mesh
				geometry={nodes.door_rf_ok_001.geometry}
				material={nodes.door_rf_ok_001.material}
			/>
			<mesh
				geometry={nodes.langgg_001.geometry}
				material={nodes.langgg_001.material}
			/>
			<mesh
				geometry={nodes.exhaust_ok_001.geometry}
				material={nodes.exhaust_ok_001.material}
			/>
			<mesh
				geometry={nodes.Front_Seat_002.geometry}
				material={nodes.Front_Seat_002.material}
			/>
			<mesh
				geometry={nodes.Front_Seat_001.geometry}
				material={nodes.Front_Seat_001.material}
			/>
			<mesh
				geometry={nodes.GTI_Logo_001.geometry}
				material={nodes.GTI_Logo_001.material}
			/>
			<mesh
				geometry={nodes.chassis_001.geometry}
				material={nodes.chassis_001.material}
			/>
			<mesh
				geometry={nodes.bump_rea01_001.geometry}
				material={nodes.bump_rea01_001.material}
			/>
			<mesh
				geometry={nodes.bump_fro01_001.geometry}
				material={nodes.bump_fro01_001.material}
			/>
			<mesh
				geometry={nodes.Rear_Windshield_001.geometry}
				material={nodes.Rear_Windshield_001.material}
			/>
			<mesh
				geometry={nodes.boot_ok_001.geometry}
				material={nodes.boot_ok_001.material}
			/>
			<mesh
				geometry={nodes.bonnet_ok_001.geometry}
				material={nodes.bonnet_ok_001.material}
			/>
			<mesh
				geometry={nodes.Group_018.geometry}
				material={nodes.Group_018.material}
			/>
			<mesh
				geometry={nodes.Group_017.geometry}
				material={nodes.Group_017.material}
			/>
			<mesh
				geometry={nodes.Group_016.geometry}
				material={nodes.Group_016.material}
			/>
			<mesh
				geometry={nodes.Group_015.geometry}
				material={nodes.Group_015.material}
			/>
			<mesh
				geometry={nodes.Group_014.geometry}
				material={nodes.Group_014.material}
			/>
			<mesh
				geometry={nodes.Group_013.geometry}
				material={nodes.Group_013.material}
			/>
			<mesh
				geometry={nodes.Group_012.geometry}
				material={nodes.Group_012.material}
			/>
			<mesh
				geometry={nodes.Group_011.geometry}
				material={nodes.Group_011.material}
			/>
			<mesh
				geometry={nodes.Group_009.geometry}
				material={nodes.Group_009.material}
			/>
			<mesh
				geometry={nodes.Group_008.geometry}
				material={nodes.Group_008.material}
			/>
			<mesh
				geometry={nodes.Group_007.geometry}
				material={nodes.Group_007.material}
			/>
			<mesh
				geometry={nodes.Group_006.geometry}
				material={nodes.Group_006.material}
			/>
			<mesh
				geometry={nodes.Group_005.geometry}
				material={nodes.Group_005.material}
			/>
			<mesh
				geometry={nodes.Group_004.geometry}
				material={nodes.Group_004.material}
			/>
			<mesh
				geometry={nodes.Group_003.geometry}
				material={nodes.Group_003.material}
			/>
			<mesh
				geometry={nodes.Group_002.geometry}
				material={nodes.Group_002.material}
			/>
		</group>
	);
}

export default Golf;

useGLTF.preload("/golf.gltf");
