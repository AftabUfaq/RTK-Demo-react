import React, {useState} from "react";
import { useDispatch, useSelector} from "react-redux/";
import { ordered,restocked  } from "./cakeSlice";
const cakeView = () => {
    const numofCakes = useSelector((state) => state.cake.numberofCakes)
    const [value,  setValue] = useState(0)
    const dispatch = useDispatch()
    return(
        <div>
            <h1>nummber of cakes- {numofCakes} </h1>
            <button onClick={() => dispatch(ordered())} >Order Cake</button>
            <h1></h1>
            <input type={"number"} value={value}  onChange={(e) => setValue(parseInt(e.target.value)) } />
            <h1></h1>
            <button onClick={() => dispatch(restocked(value))}>Restock Cake</button>
        </div>
    )
}
export default cakeView