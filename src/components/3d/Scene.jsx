import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";


/* =========================================
   CENTRAL CORE
========================================= */

function Core() {
  const coreRef = useRef();

  useFrame((state) => {
    if (!coreRef.current) return;

    coreRef.current.rotation.x =
      state.clock.elapsedTime * 0.3;

    coreRef.current.rotation.y =
      state.clock.elapsedTime * 0.5;

    coreRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
  });

  return (
    <mesh ref={coreRef}>

      <icosahedronGeometry
        args={[1.05, 2]}
      />

      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#5b21b6"
        emissiveIntensity={2}
        metalness={0.8}
        roughness={0.15}
      />

    </mesh>
  );
}


/* =========================================
   INNER CORE
========================================= */

function InnerCore() {
  const coreRef = useRef();

  useFrame((state) => {
    if (!coreRef.current) return;

    coreRef.current.rotation.x =
      -state.clock.elapsedTime * 0.5;

    coreRef.current.rotation.y =
      state.clock.elapsedTime * 0.7;
  });

  return (
    <mesh ref={coreRef}>

      <octahedronGeometry
        args={[0.55, 1]}
      />

      <meshStandardMaterial
        color="#ddd6fe"
        emissive="#8b5cf6"
        emissiveIntensity={3}
        metalness={1}
        roughness={0.05}
      />

    </mesh>
  );
}


/* =========================================
   ROTATING RING
========================================= */

function Ring({
  radius,
  rotation,
  speed,
  color
}) {

  const ringRef = useRef();

  useFrame((state) => {

    if (!ringRef.current) return;

    ringRef.current.rotation.z =
      state.clock.elapsedTime * speed;

    ringRef.current.rotation.x =
      rotation[0] +
      Math.sin(state.clock.elapsedTime * 0.5) * 0.15;

  });

  return (
    <mesh
      ref={ringRef}
      rotation={rotation}
    >

      <torusGeometry
        args={[
          radius,
          0.025,
          16,
          100
        ]}
      />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={3}
        metalness={1}
        roughness={0.15}
      />

    </mesh>
  );
}


/* =========================================
   PARTICLES
========================================= */

function Particles() {

  const pointsRef = useRef();

  const positions = useMemo(() => {

    const count = 350;

    const data = new Float32Array(
      count * 3
    );

    for (let i = 0; i < count; i++) {

      const radius =
        2.2 + Math.random() * 1.8;

      const theta =
        Math.random() * Math.PI * 2;

      const phi =
        Math.acos(
          2 * Math.random() - 1
        );

      data[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      data[i * 3 + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      data[i * 3 + 2] =
        radius *
        Math.cos(phi);
    }

    return data;

  }, []);


  useFrame((state) => {

    if (!pointsRef.current) return;

    pointsRef.current.rotation.y =
      state.clock.elapsedTime * 0.04;

    pointsRef.current.rotation.x =
      state.clock.elapsedTime * 0.02;

  });


  return (
    <points ref={pointsRef}>

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />

      </bufferGeometry>

      <pointsMaterial
        size={0.025}
        color="#a78bfa"
        transparent
        opacity={0.8}
        sizeAttenuation
      />

    </points>
  );
}


/* =========================================
   COMPLETE 3D SCENE
========================================= */

function Scene() {

  return (

    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45
      }}

      dpr={[1, 2]}
    >

      {/* Ambient lighting */}

      <ambientLight
        intensity={0.4}
      />


      {/* Main purple light */}

      <pointLight
        position={[3, 3, 3]}
        color="#8b5cf6"
        intensity={20}
        distance={10}
      />


      {/* Blue secondary light */}

      <pointLight
        position={[-3, -2, 2]}
        color="#3b82f6"
        intensity={15}
        distance={10}
      />


      {/* White highlight */}

      <pointLight
        position={[0, 2, 3]}
        color="#ffffff"
        intensity={8}
        distance={8}
      />


      {/* Main object */}

      <Core />

      <InnerCore />


      {/* Rings */}

      <Ring
        radius={1.6}
        rotation={[Math.PI / 2.5, 0, 0]}
        speed={0.35}
        color="#8b5cf6"
      />

      <Ring
        radius={1.9}
        rotation={[Math.PI / 3, 0.5, 0]}
        speed={-0.25}
        color="#6366f1"
      />

      <Ring
        radius={2.2}
        rotation={[0.8, Math.PI / 3, 0]}
        speed={0.18}
        color="#a78bfa"
      />


      {/* Particle field */}

      <Particles />


      {/* Mouse controls */}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        rotateSpeed={0.4}
      />

    </Canvas>

  );
}

export default Scene;