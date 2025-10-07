import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Cylinder, Torus } from '@react-three/drei';
import * as THREE from 'three';

function MagneticRing({ position, radius = 0.5, tubeRadius = 0.08, color = '#00d4ff', glowIntensity = 1 }: any) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      <Torus ref={ringRef} args={[radius, tubeRadius, 16, 32]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={glowIntensity}
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>
      <Torus args={[radius, tubeRadius * 1.5, 16, 32]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
        />
      </Torus>
    </group>
  );
}

function Vehicle({ levitationHeight }: { levitationHeight: number }) {
  const carRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (carRef.current) {
      const hover = Math.sin(state.clock.elapsedTime * 2) * 0.05;
      carRef.current.position.y = levitationHeight + hover;
      carRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
    }
  });

  return (
    <group ref={carRef} position={[0, levitationHeight, 0]}>
      <Box args={[2, 0.4, 1]} position={[0, 0.2, 0]}>
        <meshStandardMaterial
          color="#1e40af"
          metalness={0.7}
          roughness={0.3}
        />
      </Box>

      <Box args={[1.2, 0.5, 0.9]} position={[0, 0.65, 0]}>
        <meshStandardMaterial
          color="#1e3a8a"
          metalness={0.6}
          roughness={0.4}
        />
      </Box>

      <Box args={[1.15, 0.4, 0.85]} position={[0, 0.65, 0]}>
        <meshStandardMaterial
          color="#60a5fa"
          transparent
          opacity={0.3}
          metalness={1}
          roughness={0}
        />
      </Box>

      {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
        <MagneticRing
          key={i}
          position={[x, -0.3, 0]}
          radius={0.25}
          tubeRadius={0.05}
          color="#00d4ff"
          glowIntensity={1.5}
        />
      ))}
    </group>
  );
}

function Ground() {
  return (
    <group position={[0, -0.01, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      <gridHelper args={[10, 20, '#1e293b', '#1e293b']} position={[0, 0.01, 0]} />
    </group>
  );
}

function MagneticFieldLines() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((child, i) => {
        const offset = (state.clock.elapsedTime + i * 0.5) % 4;
        child.position.y = -1 + offset;
        const opacity = 1 - (offset / 4);
        if (child instanceof THREE.Mesh && child.material instanceof THREE.Material) {
          (child.material as any).opacity = opacity * 0.3;
        }
      });
    }
  });

  return (
    <group ref={linesRef}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Torus
          key={i}
          args={[3 - i * 0.3, 0.02, 16, 32]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
        >
          <meshBasicMaterial
            color="#06b6d4"
            transparent
            opacity={0.3}
          />
        </Torus>
      ))}
    </group>
  );
}

function EarthField() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, -3, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        color="#0ea5e9"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
}

function ForceVectors({ levitationHeight }: { levitationHeight: number }) {
  return (
    <group>
      <group position={[0, levitationHeight + 0.5, 0]}>
        <Cylinder args={[0.05, 0.05, 0.8]}>
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
        </Cylinder>
        <Cylinder args={[0.15, 0, 0.3]} position={[0, -0.55, 0]}>
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
        </Cylinder>
        <Text
          position={[0.5, 0, 0]}
          fontSize={0.2}
          color="#ef4444"
          anchorX="left"
        >
          Fg (9000N)
        </Text>
      </group>

      <group position={[0, levitationHeight - 0.5, 0]}>
        <Cylinder args={[0.05, 0.05, 0.8]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
        </Cylinder>
        <Cylinder args={[0, 0.15, 0.3]} position={[0, 0.55, 0]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
        </Cylinder>
        <Text
          position={[0.5, 0, 0]}
          fontSize={0.2}
          color="#06b6d4"
          anchorX="left"
        >
          Fm (9000N)
        </Text>
      </group>
    </group>
  );
}

function InfoLabels({ levitationHeight }: { levitationHeight: number }) {
  return (
    <group>
      <Text
        position={[0, levitationHeight + 1.5, 0]}
        fontSize={0.25}
        color="#ffffff"
        anchorX="center"
      >
        Veículo 900kg
      </Text>

      <Text
        position={[2.5, levitationHeight, 0]}
        fontSize={0.18}
        color="#00d4ff"
        anchorX="left"
      >
        Altura: {(levitationHeight * 100).toFixed(1)}cm
      </Text>

      <Text
        position={[-3, 1, 0]}
        fontSize={0.15}
        color="#94a3b8"
        anchorX="left"
      >
        Campo Terrestre{'\n'}~0.5 Gauss
      </Text>
    </group>
  );
}

export default function MagneticLevitationScene() {
  const [levitationHeight, setLevitationHeight] = useState(1.6);
  const [showForces, setShowForces] = useState(true);
  const [showFieldLines, setShowFieldLines] = useState(true);

  return (
    <div className="w-full h-[600px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 relative">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50 }}
        shadows
      >
        <color attach="background" args={['#020617']} />

        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, 5, -10]} intensity={0.5} color="#00d4ff" />
        <spotLight
          position={[0, 8, 0]}
          angle={0.6}
          penumbra={1}
          intensity={0.5}
          castShadow
        />

        <Ground />
        <Vehicle levitationHeight={levitationHeight} />
        {showFieldLines && <MagneticFieldLines />}
        <EarthField />
        {showForces && <ForceVectors levitationHeight={levitationHeight} />}
        <InfoLabels levitationHeight={levitationHeight} />

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
        />
      </Canvas>

      <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl p-4 space-y-4">
        <div>
          <label className="text-sm text-slate-300 block mb-2">
            Altura de Levitação: {(levitationHeight * 100).toFixed(1)}cm
          </label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={levitationHeight}
            onChange={(e) => setLevitationHeight(parseFloat(e.target.value))}
            className="w-full accent-cyan-500"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={showForces}
              onChange={(e) => setShowForces(e.target.checked)}
              className="accent-cyan-500"
            />
            Mostrar Forças
          </label>

          <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={showFieldLines}
              onChange={(e) => setShowFieldLines(e.target.checked)}
              className="accent-cyan-500"
            />
            Linhas de Campo
          </label>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl p-3 text-xs text-slate-400">
        <div>🖱️ Arraste para rotacionar</div>
        <div>🔍 Scroll para zoom</div>
        <div>✋ Clique direito para mover</div>
      </div>
    </div>
  );
}
