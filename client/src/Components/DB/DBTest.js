import React, { useState, useEffect, Component } from 'react';
import useFetch from "../../Hooks/useFetch.js"
/*
class DBtest extends React.Component{
    state = {
        customers: ""
    }

    componentDidMount(){
        this.callApi()
        .then (res => this.setState({customers: res}))
        .catch(err => console.log(err))
    }

    callApi =  async () => {
        
        const response = await fetch('/DB');
        const body = await response.json();
        console.log(body);
        return body;
    }

    render(){
        return (
            <div>
                {this.state.customers?this.state.customers[0].id:""}
                {this.state.customers?this.state.customers[0].name:""}
                {this.state.customers?this.state.customers[0].comment:""}<br></br>
                {this.state.customers?this.state.customers[1].id:""}
                {this.state.customers?this.state.customers[1].name:""}
                {this.state.customers?this.state.customers[2].comment:""}<br></br>
            </div>            
        )
        }
}
  
export default DBtest;
*/

export default function DBtest() {

    const customers = useFetch("/k");
    console.log(customers);
        return (
            <>
            {customers.length > 0 && (
                <div>
                    목록 : 이름
                    {customers.map(custom => (
                        <div> {custom.name} </div>
                    ))}
                </div>

                )}
            </>
        )
}

/*
export default function DBtest(){
    
    const [data, setData] = useState([]);
    let newdata;
    useEffect(() => {        
        fetch("/db")
        .then(res => {            
            return res.json();
        })       
        .then(data => {
            newdata = data;
            setData(newdata);
            console.log(data);
            console.log(newdata);
        })
        
    },[newdata]);

        return (
            <div>
               <h1>Hello={newdata?newdata:"kk"}</h1>
            </div>            
        )
}
*/
