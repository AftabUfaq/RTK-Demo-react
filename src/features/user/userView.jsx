import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux/";
import { fetchUsers } from "./userSlice";
const userView = () => {
   
    const {users, loading, error} = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers()) 
    },[])
    return(
        <div>
            <h1>List of Users {users.length}</h1>
             {loading && <div>Loading....</div>}
             {!loading && error ? <div>Error: {error}</div> :null}
             {!loading && users.length  ? (
                <ul>
{
                    users.map((item) => {
                        return(
                            <li key={`${item}`}>{item}</li>
                        )
                    })
                }
                </ul>
             ):null}
           
        </div>
    )
}
export default userView