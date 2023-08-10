import { OrbitControls, Sky, ContactShadows, PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, {useRef, useState, useEffect} from "react";

export default function Experience () {

    useFrame((state, delta) => {
        // state.camera.lookAt(0,0.7,0)
    })
    return <>
        
        <Sky distance={200000} sunPosition={[-10, 10, 0]}/>
        <ambientLight/>
        <pointLight position={[-10, 10, 0]}/>

        <ContactShadows opacity={0.5} scale={2.5} blur={3} far={7} resolution={256} color="#204004" />
        {/* <gridHelper position={[0, 0.001, 0]} args={[40,40, 'white', 'white']}/> */}

        <PresentationControls 
            polar={[0, 0]} 
            azimuth={[-Infinity, Infinity]} 
            config={{ mass: 8, tension: 170, friction: 20 }}
            global={true} 
            rotation={[0, 0, 0]}
            snap={true}
            speed={0.8}
      >
            <mesh>
                <boxGeometry/>
                <meshNormalMaterial/>
            </mesh>

        </PresentationControls>

        
        
        
    </>
}