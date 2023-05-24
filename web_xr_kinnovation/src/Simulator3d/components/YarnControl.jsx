import React from 'react';
import * as THREE from 'three';
import { useControls } from 'leva';

export const YarnControl = ({ material, index }) => {
    const options = useControls(`Yarn ${index + 1}`, {
        color: `#${material.material?.color.getHexString()}`,
        linewidth: {
            value: 1,
            min: 0,
            max: 10,
            step: 0.5,
        },
    });
    material.material.color = new THREE.Color(options.color);
    material.material.linewidth = options.linewidth;
    return null;
};
