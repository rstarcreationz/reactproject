import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";


const Protected = (props) => {
    const history = useHistory();
    let Cmp = props.Cmp
    useEffect(()=>{
        if (!localStorage.getItem("user-info"))
        {
            history.push("/login");
        }
    },[])
    return(
        <Cmp/>
    );
}

export default Protected;