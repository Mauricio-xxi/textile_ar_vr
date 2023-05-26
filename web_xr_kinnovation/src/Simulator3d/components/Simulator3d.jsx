import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, Environment } from "@react-three/drei";
import useLoad3DVectors from "../hooks/useLoad3DVectors";
import useMaterialsSimulator from "../hooks/useMaterialsSimulator";
import { YarnControl } from "./YarnControl";
import * as THREE from "three";
import SceneLogic from "./SceneLogic";
import { XR, Controllers, ARButton } from "@react-three/xr";
import BarsSimulatorContainer from "./BarsSimulatorContainer";

const Simulator3d = ({ designId, viewport, downloadFile, setDownloadFile }) => {
  const { loading, backendVectors } = useLoad3DVectors(designId, viewport);
  const { materials } = useMaterialsSimulator(backendVectors?.yarnsInfo);

  if (loading) {
    return <p>loading...</p>;
  }
  const targetPosition = new THREE.Vector3(
    (backendVectors?.center[0],
    backendVectors?.center[1],
    backendVectors?.center[2])
  );

  return (
    <>
      <ARButton />
      <Canvas
        camera={{
          position: [0, 0, 4000],
          far: 100000,
        }}
      >
        <XR referenceSpace="local">
          <SceneLogic
            downloadFile={downloadFile}
            setDownloadFile={setDownloadFile}
            designName={"test_download"}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 1]} intensity={0.75} />
          {/* <directionalLight position={[0, 0, -1]} intensity={0.75} /> */}
          {materials.map((material, index) => (
            <YarnControl material={material} index={index} key={index} />
          ))}
          <BarsSimulatorContainer bars={backendVectors.stitchData} materials={materials}/>
          <OrbitControls target={targetPosition} />
          <Controllers />
          {/* <axesHelper args={[5]} /> */}
          {/* <gridHelper /> */}
          {/* <Stats /> */}
        </XR>
      </Canvas>
    </>
  );
};

export default Simulator3d;
