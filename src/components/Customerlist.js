import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';


export default function Customerlist(){
    const [customer, setCustomers] = useState([]);

    useEffect(() => fetchData() , []);

  const fetchData = () =>{
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    
    }

       const columns  = [
        { title: 'firstname', field: 'firstname'},
        { title: 'lastname', field: 'lastname'},
        { title: 'streetaddress"', field: 'streetaddress'},
        { title: 'postcode', field: 'postcode'},
        { title: 'city', field: 'city'},
        { title: 'email', field: 'email'},
        { title: 'phone', field: 'phone'}
       ]


    return(
        <div>
            <MaterialTable data={customer} columns={columns} 
        title="All customers"
        
            />
        </div>
    );
}

// installing materialUI library
