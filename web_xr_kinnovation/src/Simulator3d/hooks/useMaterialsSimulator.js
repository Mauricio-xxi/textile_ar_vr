import React, { useState, useEffect } from 'react';
import * as THREE from 'three';

// new THREE.MeshLambertMaterial({
//     color: 'white',
// })

const useMaterialsSimulator = yarnsInfo => {
    const [materials, setMaterials] = useState([
        {
            material: new THREE.LineBasicMaterial({
                color: 0xffffff,
                linewidth: 1,
                linecap: 'round', //ignored by WebGLRenderer
                linejoin: 'round', //ignored by WebGLRenderer
            }),
            num: 0,
            thickness: 1,
        },
    ]);

    useEffect(() => {
        if (yarnsInfo) {
            setMaterials([
                ...materials,
                ...yarnsInfo.map(yarn => {
                    let pongMaterial = new THREE.LineBasicMaterial({
                        color: yarn.color,
                        linewidth: 1,
                        linecap: 'round', //ignored by WebGLRenderer
                        linejoin: 'round', //ignored by WebGLRenderer
                    });
                    return {
                        material: pongMaterial,
                        num: yarn.num,
                        thickness: yarn.thickness,
                    };
                }),
            ]);
        }
    }, [yarnsInfo]);

    return { materials };
};

export default useMaterialsSimulator;
