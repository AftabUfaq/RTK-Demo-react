import React from "react";
import { useDispatch, useSelector} from "react-redux/";
import { ordered,restocked  } from "./icecreamSlice";
const icecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    return(
        <div>
            <h1>number of Ice Creams -   {numOfIcecreams}</h1>
            <button onClick={() => dispatch(ordered())} >Order Ice Cream</button>
            <h1></h1>
            <button onClick={() => dispatch(restocked(5))}>Restock Ice Cream</button>
        </div>
    )
}
export default icecreamView