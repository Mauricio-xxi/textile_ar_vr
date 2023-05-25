import React, { useEffect } from "react";
import YarnSimulator from "./YarnSimulator";
import { useThree, useFrame } from "@react-three/fiber";
import { Line } from "three";
import { RayGrab } from "@react-three/xr";

const BarsSimulator = ({ bar, materials }) => {
  const barMaterial = materials.find(
    (material) => material.num === bar[0][0]
  )?.material;

  const { scene } = useThree();
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
  useEffect(() => {
    scene.traverse((object) => {
      if (object instanceof Line) {
        // Aquí puedes mover tus líneas como desees.
        // Por ejemplo, vamos a mover todas las líneas en el eje x una vez.
        object.position.z -= 500;
      }
    });
  }, []); // Un arreglo vacío significa que este efecto se ejecutará solo una vez.

  const onSelect = (e)=>{
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>', e)
    scene.traverse((object) => {
      if (object instanceof Line) {
        object.position.z += 50;
      }
    });
  }

  return (
    <>
    <RayGrab >
      {bar.map((yarn, index) => {
        return (
          <YarnSimulator key={index} points={yarn[2]} material={barMaterial} />
          );
        })}
    </RayGrab>
    </>
  );
};

export default BarsSimulator;
