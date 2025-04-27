"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Environment, Text } from "@react-three/drei"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import * as THREE from "three"

function Globe({ scale = 1 }) {
  const earthRef = useRef()
  const [hovered, setHovered] = useState(false)
  const texture = useLoader(TextureLoader, "/assets/3d/texture_earth.jpg")

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={earthRef} scale={scale} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.1}
        roughness={0.7}
        emissive={hovered ? new THREE.Color(0x2222ff) : new THREE.Color(0x000000)}
        emissiveIntensity={hovered ? 0.2 : 0}
      />
    </mesh>
  )
}

function FloatingText({ position, text, color = "#ffffff" }) {
  const textRef = useRef()

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.1
    }
  })

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.2}
      color={color}
      anchorX="center"
      anchorY="middle"
      font="/fonts/Inter_Bold.json"
    >
      {text}
    </Text>
  )
}

function LanguageBubbles() {
  const languages = [
    { code: "en", name: "English", position: [1.5, 0.5, 0], color: "#4285F4" },
    { code: "es", name: "Español", position: [-1.5, 0.8, 0], color: "#EA4335" },
    { code: "fr", name: "Français", position: [0, 1.5, 0], color: "#FBBC05" },
    { code: "de", name: "Deutsch", position: [0.8, -1.2, 0], color: "#34A853" },
    { code: "ja", name: "日本語", position: [-0.8, -1, 0], color: "#FF6D01" },
  ]

  return (
    <>
      {languages.map((lang) => (
        <FloatingText key={lang.code} position={lang.position} text={lang.name} color={lang.color} />
      ))}
    </>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, -10, -10]} intensity={0.5} />

        <Globe scale={1} />
        <LanguageBubbles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
