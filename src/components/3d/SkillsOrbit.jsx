import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useRef } from "react";

const skills = [
    {
        name: "React",
        color: "#61dafb",
        position: [0, 1.55, 0],
    },
    {
        name: "JavaScript",
        color: "#f7df1e",
        position: [1.35, 0.8, 0],
    },
    {
        name: "Python",
        color: "#3776ab",
        position: [1.35, -0.8, 0],
    },
    {
        name: "Node.js",
        color: "#68a063",
        position: [0, -1.55, 0],
    },
    {
        name: "Java",
        color: "#f89820",
        position: [-1.35, -0.8, 0],
    },
    {
        name: "SQL",
        color: "#b48ead",
        position: [-1.35, 0.8, 0],
    },
];

function SkillNode({ name, color, position }) {
    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[0.07, 20, 20]} />

                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={2}
                />
            </mesh>

            <Html
                center
                distanceFactor={10}
                style={{
                    pointerEvents: "none",
                }}
            >
                <div
                    style={{
                        padding: "4px 7px",
                        border: `1px solid ${color}99`,
                        borderRadius: "6px",
                        background: "rgba(5, 5, 12, 0.82)",
                        color: "#ffffff",
                        fontSize: "8px",
                        fontWeight: "600",
                        letterSpacing: "0.2px",
                        whiteSpace: "nowrap",
                        boxShadow: `0 0 8px ${color}25`,
                        backdropFilter: "blur(6px)",
                    }}
                >
                    {name}
                </div>
            </Html>
        </group>
    );
}

function SkillUniverse() {
    const groupRef = useRef();

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.z += delta * 0.08;
            groupRef.current.rotation.y += delta * 0.04;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Outer orbit */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.75, 0.012, 16, 100]} />

                <meshBasicMaterial
                    color="#a855f7"
                    transparent
                    opacity={0.6}
                />
            </mesh>

            {/* Second orbit */}
            <mesh rotation={[0.8, 0.5, 0]}>
                <torusGeometry args={[1.45, 0.008, 16, 100]} />

                <meshBasicMaterial
                    color="#6366f1"
                    transparent
                    opacity={0.45}
                />
            </mesh>

            {/* Main Core */}
            <mesh>
                <icosahedronGeometry args={[0.55, 2]} />

                <meshStandardMaterial
                    color="#a855f7"
                    emissive="#7c3aed"
                    emissiveIntensity={2}
                    metalness={0.7}
                    roughness={0.2}
                />
            </mesh>

            {/* Inner Core */}
            <mesh rotation={[0.5, 0.5, 0]}>
                <octahedronGeometry args={[0.32, 0]} />

                <meshBasicMaterial
                    color="#c084fc"
                    wireframe
                />
            </mesh>

            {/* Skill Nodes */}
            {skills.map((skill) => (
                <SkillNode
                    key={skill.name}
                    name={skill.name}
                    color={skill.color}
                    position={skill.position}
                />
            ))}
        </group>
    );
}

function SkillsOrbit() {
    return (
        <Canvas
            camera={{
                position: [0, 0, 6],
                fov: 45,
            }}
            dpr={[1, 1.5]}
            gl={{
                antialias: true,
                alpha: true,
            }}
        >
            <ambientLight intensity={0.45} />

            <pointLight
                position={[2, 3, 4]}
                intensity={8}
                color="#a855f7"
            />

            <pointLight
                position={[-3, -2, 3]}
                intensity={5}
                color="#3b82f6"
            />

            <SkillUniverse />
        </Canvas>
    );
}

export default SkillsOrbit;