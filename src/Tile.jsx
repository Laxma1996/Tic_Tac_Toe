import React, { useState } from 'react';
import { useCursor, Text } from '@react-three/drei';

export default function Tile({ position, value, onClick }) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  return (
    <mesh
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1.8, 0.2, 1.8]} />
      <meshStandardMaterial color={hovered ? 'lightblue' : 'white'} />
      {value && (
        <Text position={[0, 0.3, 0]} fontSize={0.5} color="black" anchorX="center" anchorY="middle">
          {value}
        </Text>
      )}
    </mesh>
  );
}
