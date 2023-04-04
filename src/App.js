import { useLayoutEffect } from "react"
import { Canvas, applyProps, useThree  } from "@react-three/fiber"
import { Sky, PointerLockControls, useGLTF, useFBX } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./Ground"
import { Player } from "./Player"
import { Cube, Cubes } from "./Cube"
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

// import Trees from "./Trees";

// The original was made by Maksim Ivanow: https://www.youtube.com/watch?v=Lc2JvBXMesY&t=124s
// This demo needs pointer-lock, that works only if you open it in a new window
// Controls: WASD + left click

// useGLTF.preload('/station.gltb')

export default function App() {
  return (

    <Canvas shadows camera={{ fov: 45}}>
      
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      
      <Court position={[-10,0.1,5]} scale = {[0.5,0.5,0.5]}  rotation = {[0,135,0]}/>
      {/* <Court1 position={[20,5.25,20]} rotation = {[0,180,0]}/> */}
      {/* <Court2 position={[40,-23,0]}/> */}
       <Physics gravity={[0, -50, 0]}> 
        <Ground />
        <Player/>
      </Physics>
      <PointerLockControls />
      
    </Canvas>


    
    
    
  )
}

function Court(props) {
  const { scene, nodes } = useGLTF('/upl_final_coaching.glb')
  useLayoutEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh) {
        if (o === nodes.GymFloor_ParquetShader_0) o.parent.remove(o)
        else applyProps(o, { castShadow: true, receiveShadow: true, 'material-envMapIntensity': 0.5})
      }
    })
  })
  return <primitive object={scene} {...props} />
}

function Court1(props) {
  const { scene, nodes } = useGLTF('/western1.glb')
  useLayoutEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh) {
        if (o === nodes.GymFloor_ParquetShader_0) o.parent.remove(o)
        else applyProps(o, { castShadow: true, receiveShadow: true, 'material-envMapIntensity': 0.1 })
      }
    })
  })
  return <primitive object={scene} {...props} />
}

function Court2(props) {
  const { scene, nodes } = useGLTF('/house2.glb')
  useLayoutEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh) {
        if (o === nodes.GymFloor_ParquetShader_0) o.parent.remove(o)
        else applyProps(o, { castShadow: true, receiveShadow: true, 'material-envMapIntensity': 0.1 })
      }
    })
  })
  return <primitive object={scene} {...props} />
}

// const house = () => {
//   const fbx = useFBX("FCSG_House1.fbx")

//   return <primitive object={fbx} scale={0.005} />
// }