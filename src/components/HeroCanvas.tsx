import type { FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';

const HeroScene: FC = () => {
  return (
    <>
      {/* Background and basic lighting */}
      <color attach="background" args={['#020617']} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 3]} intensity={1.2} />
      <pointLight position={[-4, -4, -2]} intensity={0.8} color="#38bdf8" />

      {/* Star field */}
      <Stars radius={80} depth={50} count={2000} factor={4} fade speed={1} />

      {/* Floating glowing sphere */}
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.4}>
        <mesh position={[-1.4, 0.4, 0]}>
          <sphereGeometry args={[1.3, 64, 64]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.8}
            roughness={0.15}
            emissive="#0ea5e9"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>

      {/* Floating ring */}
      <Float speed={1.1} rotationIntensity={0.9} floatIntensity={0.8}>
        <mesh position={[1.3, -0.2, 0]} rotation={[Math.PI / 2.6, 0.3, 0]}>
          <torusGeometry args={[1.1, 0.12, 32, 128]} />
          <meshStandardMaterial
            color="#22c55e"
            metalness={0.9}
            roughness={0.2}
            emissive="#16a34a"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>

      {/* Camera controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.7}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

export const HeroCanvas: FC = () => {
  return (
    <div className="hero-canvas">
      {/* #region agent log */}
      {fetch('http://127.0.0.1:7242/ingest/40c8a163-e936-4397-85c7-ab3ad96fdbc1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: 'debug-session',
          runId: 'initial',
          hypothesisId: 'H2',
          location: 'HeroCanvas.tsx:render',
          message: 'HeroCanvas rendered',
          data: {},
          timestamp: Date.now(),
        }),
      }).catch(() => {})}
      {/* #endregion agent log */}
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <HeroScene />
      </Canvas>
    </div>
  );
};

