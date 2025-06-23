import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GameBoard from './GameBoard';

export default function Tic_Tac_Toe_3D() {
    return (
        <Canvas>
            <mesh>
                <ambientLight />
                <pointLight position={[1, 1, 1]} />
                <OrbitControls />
                <GameBoard />
            </mesh>
        </Canvas>
    );
}

