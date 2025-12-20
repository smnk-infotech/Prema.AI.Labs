'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function DigitalHeart() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* Core filaments (abstracted as a smaller sphere with wireframe or points) */}
                <mesh scale={0.8}>
                    <icosahedronGeometry args={[1, 4]} />
                    <meshBasicMaterial color="#ff8e3c" wireframe transparent opacity={0.3} />
                </mesh>

                {/* Glass Outer Shell */}
                <mesh ref={meshRef} scale={2.5}>
                    <octahedronGeometry args={[1, 0]} /> {/* Abstract crystalline shape */}
                    <MeshTransmissionMaterial
                        backside
                        samples={16}
                        thickness={2}
                        chromaticAberration={0.05}
                        anisotropy={0.1}
                        distortion={0.5}
                        distortionScale={0.5}
                        temporalDistortion={0.1}
                        iridescence={1}
                        iridescenceIOR={1}
                        iridescenceThicknessRange={[0, 1400]}
                        roughness={0.1}
                        ior={1.5}
                        color="#ffffff"
                    />
                </mesh>
            </Float>

            {/* Ambient particles/light points */}
            <mesh position={[2, 2, -2]} scale={0.2}>
                <sphereGeometry />
                <meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={2} />
            </mesh>
        </group>
    );
}

export default function HeroScene() {
    return (
        <div className="w-full h-full min-h-[500px] lg:min-h-[800px] relative">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <Environment preset="studio" />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <DigitalHeart />
            </Canvas>
        </div>
    );
}
