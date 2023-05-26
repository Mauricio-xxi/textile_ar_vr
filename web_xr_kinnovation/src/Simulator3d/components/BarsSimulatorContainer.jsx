import {  useThree } from "@react-three/fiber";
import { RayGrab } from "@react-three/xr";
import BarsSimulator from "./BarsSimulator";

const BarsSimulatorContainer = ({bars, materials})=>{
    const { scene } = useThree();

    const onSelect = (e)=>{
        scene.traverse((object) => {
          if (object instanceof Line) {
            object.position.z += 100;
            
          }
        });
      }

    return(
        <RayGrab onSelect={onSelect} >
            {bars.map((bar, index) => (
                <BarsSimulator key={index} bar={bar} materials={materials} />
            ))}
        </RayGrab>
    )
}

export default BarsSimulatorContainer