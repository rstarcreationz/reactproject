
import axios from 'axios';
import React, { useState} from 'react';
import {useHistory } from 'react-router-dom';
import Header from './Header';

const About = () => {

    
    let history = useHistory();
    const [update, setUpdate] = useState({
        name: "",
        email: "",
        address: ""
    });


    const inputHandler = (event) => {
        setUpdate({ ...update, [event.target.name]: event.target.value });
        console.log(event.target.value)
    };

    const UpdateThis = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3333/user", update);
        history.push("/");
    };

    return (
        <>
        <Header/>
            <div className="container">
                <h5>Hello this is About page</h5>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">

                        <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="name"
                                name="name"
                                onChange={event => inputHandler(event)}
                            />
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="email"
                                name="email"
                                onChange={event => inputHandler(event)}
                            />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="address"
                                name="address"
                                onChange={event => inputHandler(event)}
                            />
                        </div>

                        <div className="form-group">
                                <button type="button" className="btn btn-primary" onClick={event=> UpdateThis(event)}> Submit </button>
                        </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}



export default About;