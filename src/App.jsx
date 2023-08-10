import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import { EffectComposer } from 'postprocessing'

function App() {

  return (
    <Canvas shadows camera={{ position: [-1, 1, 2.7], fov: 40}}>
        <Experience/>
      {/* <EffectComposer/> */}
    </Canvas>
  )
}

export default App
