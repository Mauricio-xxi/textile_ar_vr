import React from 'react';
import * as THREE from 'three';

const YarnSimulator = ({ points, material }) => {
    const threadPoints = points.map(([x, y, z]) => new THREE.Vector3(x, y, z));
    if (threadPoints?.length <= 1) {
        return;
    }

    const newGeometry = new THREE.BufferGeometry().setFromPoints(threadPoints);

    const curve = new THREE.CatmullRomCurve3(
        threadPoints,
        false,
        'catmullrom',
        0.0001
    );

    const pointsLen = points.length;

    if (!curve) return;
    return (
        <line geometry={newGeometry} material={material}></line>
        // <mesh material={material} geometry={newGeometry}>
        //     {/* <tubeGeometry args={[curve, pointsLen * 10, 0.6, 3, false]} /> */}
        // </mesh>
    );
};

export default YarnSimulator;
