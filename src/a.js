import Snap,{Paper} from 'snapsvg-cjs'
import React, { useEffect,useRef } from 'react'

const SS = ({id})=>{
    console.log(id)
    const svgRef = useRef();
     useEffect(()=>{
         console.log("====")
         let s = Snap(svgRef.current);
        let bigCircle = s.paper.circle(150, 150, 100);
        bigCircle.attr({
            fill: "#bada55",
            stroke: "#000",
            strokeWidth: 5
        });
         console.log(svgRef.current)
    },[id]);

    return  <svg ref={svgRef} id={id} style={{width:'800px', height:'600px'}}/>
}
export default SS;
