import React, { useEffect, useState } from 'react';
import {useHistory,Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

const Signin = () => {

    useEffect(()=>{
        if (localStorage.getItem("user-info"))
        {
            history.push("/");
        }
    },[])

    let history = useHistory();
   const [mylogin, setLogin] = useState({
       name:"",
       email: "",
       Password: "",
       device_id: "dgdgdg",
       device_type:"gsdkfjdsf",
       fcm_token:"dggdssgas"
   });

   const eventhandle = (event) => {
       setLogin({...mylogin, [event.target.name]:event.target.value})
       console.log(event.target.value)
   }

   const Signup = async (event) =>{
    event.preventDefault();
      let result = await fetch("https://balukibazaar.es/balukibazar/api/user/register",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mylogin)
        });
        result = await result.json();
        console.log("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/")
   }

        return (
            <div>
                <Header/>
                <div className="container">
                   
                    <div className="row">
                        <div className="col-md-4"></div>

                        <div className="col-md-4 mt-5">
                            <div className="card shadow">
                                <div className="card-header bg-primary text-white">
                                <h5>Signup Here!</h5>
                                </div>
                                <div className="card-body">
                                <form action="" onSubmit={(event) =>Signup(event)}>
                            <div className="form-group">

                            <input type="text" className="form-control" placeholder="name"
                                    onChange={(event) => eventhandle(event)} name="name"
                                />
                                <br />

                                <input type="email" className="form-control" placeholder="email"
                                    onChange={(event) => eventhandle(event)} name="email"
                                />
                                <br />

                                <input type="password" className="form-control" placeholder="password"
                                    onChange={(event) => eventhandle(event)} name="Password"
                                />
                                <br />

                                <button type="submit" className="btn btn-outline-primary">Signup</button>
                            </div>
                            <div className="form-group">
                                <p>Already have an account ?<Link to="/login"> Login here  </Link> </p>
                            </div>
                            </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        );
}


export default Signin;