import React, { useEffect, useState } from 'react';
import {useHistory,Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";



const Login = () => {

    useEffect(()=>{
        if (localStorage.getItem("user-info"))
        {
            history.push("/");
        }
    },[])

    let history = useHistory();
   const [mylogin, setLogin] = useState({
       email: "",
       password: "",
       device_id: "dgdgdg",
       device_type:"gsdkfjdsf",
       fcm_token:"dsdfjsfsdfl"
   });

   const eventhandle = (event) => {
       setLogin({...mylogin, [event.target.name]:event.target.value})
       console.log(event.target.value)
   }

   const submit = async (event) =>{
    event.preventDefault();
      let result = await fetch("https://balukibazaar.es/balukibazar/api/user/login",{
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
        if (localStorage.getItem("user-info"))
        {
            history.push("/");
        }
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
                        <h5>Login Here!</h5>
                        </div>
                           <div className="card-body">
                           <form action="" onSubmit={(event) =>submit(event)}>
                            <div className="form-group">

                                <input type="email" className="form-control" placeholder="email"
                                    onChange={(event) => eventhandle(event)} name="email" required
                                />
                                <br />

                                <input type="password" className="form-control" placeholder="password"
                                    onChange={(event) => eventhandle(event)} name="password" required
                                />
                                <br />

                                <button type="submit" className="btn btn-outline-primary">Login</button>
                            </div>
                            <div className="form-group">
                                <p>don't have an account ?<Link to="/signin"> Sign up here  </Link> </p>
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




export default Login;