import React, { useEffect, useRef, useState } from "react";
import YarnSimulator from "./YarnSimulator";
import { useThree, useFrame } from "@react-three/fiber";
import { Line, Vector3, Matrix4 } from "three";
import { useXREvent } from "@react-three/xr";

const BarsSimulator = ({ bar, materials }) => {
  const barMaterial = materials.find(
    (material) => material.num === bar[0][0]
  )?.material;

  const { scene } = useThree();
  const groupRef = useRef()

  useXREvent('onsqueezestart', (e)=>{
    updatePosition("global", scene)
  })

  useXREvent('onsqueezeend', (e)=>{
    updatePosition("global", scene)
  })

  //   useFrame(() => {
  //     scene.traverse((object) => {
  //       if (object.isMesh) {
  //         // Aquí puedes mover tus objetos como desees.
  //         // Por ejemplo, vamos a mover todos los objetos en el eje x en cada frame.
  //         object.position.x += 100;
  //       }
  //       if (object instanceof Line) {
  //         // Aquí puedes mover tus líneas como desees.
  //         // Por ejemplo, vamos a mover todas las líneas en el eje x en cada frame.
  //         object.position.x += 0.01;
  //       }
  //     });
  //   });

  const updatePosition = (name, scene) => {
    let pos = new Vector3();
    let tempMatrix = new Matrix4;
    tempMatrix = scene.getObjectByName(name).matrixWorld;
  
    // set the oldPosition based on the matrix world positions
    pos.setFromMatrixPosition(tempMatrix);
  };

  useEffect(() => {
    scene.traverse((object) => {
      if (object instanceof Line) {
        // Aquí puedes mover tus líneas como desees.
        // Por ejemplo, vamos a mover todas las líneas en el eje x una vez.
        object.position.z -= 500;
      }
    });
  }, []); // Un arreglo vacío significa que este efecto se ejecutará solo una vez.


  return (
    <>
      <group ref={groupRef} name="global">
        {bar.map((yarn, index) => {
          return (
            <YarnSimulator key={index} points={yarn[2]} material={barMaterial} />
            );
          })}
      </group>
    </>
  );
};

export default BarsSimulator;
