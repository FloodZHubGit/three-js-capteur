/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\\public\\facade capteur.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function FacadeCapteur(props) {
  const { nodes, materials } = useGLTF("/facade capteur.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          attach="material"
          color={0x000000}
          roughness={0.4}
          metalness={0.1}
          opacity={0.2}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/facade capteur.glb");
