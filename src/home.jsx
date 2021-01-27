import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from 'react';
import axios from "axios";
import Header from "./Header";

const Home = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        LoadData();
    }, [])

    const LoadData = async () => {
        let url = "http://localhost:3333/user";
        await axios.get(url).then((result) => {
            setUser(result);
        })
    }


    const deleteRow = async (id) =>{
     await axios.delete(`http://localhost:3333/user/${id}`);
     LoadData();
    };

    return (
        <>
            <div>
            <Header />
                <div style={{ width: "720px", margin: "auto" }}>
                    <h5 className="mt-3 mb-3">home</h5>
                    {
                        user.data ?
                            <table className="table border shadow">
                                <thead className="bg-primary text-white">
                                    <th>S.No.</th>
                                    <th>Name</th>
                                    <th>email</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </thead>
                                
                                <tbody>
                                    {
                                        user.data.map((item, index) =>
                                            <tr>
                                                <td >{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.address}</td>
                                                <td>
                                                    <Link to={'/service/' + item.id} className="btn btn-success" ><EditIcon /></Link>
                                                    &nbsp; &nbsp;
                                                    <span className="btn btn-danger" style={{ cursor: "pointer", color: "#fff"}} onClick={() => deleteRow(item.id)} ><DeleteIcon /></span>
                                                </td>
                                            </tr>
                                        )}
                                </tbody>

                            </table>
                            :
                            <p>Poor Internet Connection ! please wait...</p>
                    }
                </div>
            </div>

        </>
    );
}


export default Home;