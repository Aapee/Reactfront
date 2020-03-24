import React, {useState, useEffect} from 'react';



export default function Customerlist(){
    const [customer, setCustomers] = useState([]);

    useEffect(() => fetchData() , []);

  const fetchData = () =>{
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    
    }
    return(
        <div>
            
        </div>
    );
}

// installing materialUI library
