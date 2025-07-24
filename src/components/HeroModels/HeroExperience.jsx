import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room.jsx'
import HeroLights from './HeroLights.jsx'
import Particles from './Particles.jsx'

const HeroExperience = () => {
  const isTablet = useMediaQuery({query : '(max-width: 1024 px)' });
  const isMobile = useMediaQuery({query : '(max-width: 768 px)' });

  return (
    <Canvas camera={{position: [0,0,15], fov: 45}}>
      <OrbitControls 
        enablePan={false} 
        // disables side-to-side (X/Y) dragging — so the camera stays in place, only rotates around the target.
        enableZoom={!isTablet && !isMobile}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />  
      {/* orbit controls is used for making it as a 3D and we can move the camera in all directions the position is still */}
      
      <HeroLights />
      <Particles count={100}/>
      <group
      scale={isMobile ? 0.7 : 1}
      position={[0, -3.5, 0]}
      rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  )
}

export default HeroExperience
