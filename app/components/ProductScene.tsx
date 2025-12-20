'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function VideoLayers() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Layer 1 */}
                <mesh position={[0, 0, 0.5]}>
                    <planeGeometry args={[3, 2]} />
                    <MeshTransmissionMaterial resolution={512} thickness={0.5} roughness={0.2} ior={1.5} color="#e0e0e0" />
                </mesh>
                {/* Layer 2 */}
                <mesh position={[0.2, 0.2, 0]}>
                    <planeGeometry args={[3, 2]} />
                    <meshBasicMaterial color="#ff8e3c" wireframe transparent opacity={0.2} />
                </mesh>
                {/* Layer 3 */}
                <mesh position={[-0.2, -0.2, -0.5]}>
                    <planeGeometry args={[3, 2]} />
                    <meshStandardMaterial color="#aaaaaa" transparent opacity={0.5} />
                </mesh>
            </Float>
        </group>
    );
}

function BuildingBlocks() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.children.forEach((child, i) => {
                child.position.y = Math.sin(t + i) * 0.5 + (i * 0.5 - 1);
            })
            groupRef.current.rotation.y = t * 0.2;
        }
    })

    return (
        <group ref={groupRef}>
            <mesh position={[0, 1, 0]} castShadow>
                <boxGeometry args={[1, 1, 1]} />
                <MeshTransmissionMaterial color="#a0c0ff" thickness={1} />
            </mesh>
            <mesh position={[-1.2, 0, 0]} castShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[1.2, -1, 0]} castShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#ff8e3c" />
            </mesh>
        </group>
    )
}

interface ProductSceneProps {
    type: 'video' | 'builder';
}

export default function ProductScene({ type }: ProductSceneProps) {
    return (
        <div className="w-full h-[300px] relative rounded-2xl overflow-hidden bg-slate-50/50">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <Environment preset="city" />
                <ambientLight intensity={0.8} />
                {type === 'video' ? <VideoLayers /> : <BuildingBlocks />}
            </Canvas>
        </div>
    );
}
