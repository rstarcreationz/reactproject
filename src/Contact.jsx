import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

class Contact extends React.Component{
    constructor(){
        super();
        this.state={
            searchData: null,
        }
    }

    search(key)
    {
        fetch('http://localhost:3333/user?q='+key).then((resp)=>{
            resp.json().then((result)=>{
                this.setState({searchData: result})
                console.log("search", result);
            })
        })
    }

    render(){

        return(
            <div>
                <Header/>
<div className="container">
               <h5>Hello this is Service page</h5>

               <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="search here.."
                                onChange={(event)=>this.search(event.target.value)}
                                />
                            </div>

                            {
                                this.state.searchData?
                                <div>
                                     {
                                    this.state.searchData.map((item,i)=>
                                    <h5>{item.name}</h5>
                                    )
                                }
                                </div>
                                :
                               <p>nothing found</p>
                            }

                            </div>
                            <div className="col-md-3"></div>
                        </div>

               </div>

                
            </div>
        );
    }
}

export default Contact;