import React, { useState, useEffect } from 'react';
import POSTSLIST from './PostsList';

const FETCHED = (URL) => {

     // Getting our joke
    //send it to POSTSLIST
    const [data, setData] = useState('')

    useEffect(() => {
        // Define the fetching logic inside the useEffect hook
        
            fetch(URL, {
                method: 'get',
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Store the joke data in the state
                setData(data.joke);
            });
       

        // Call the fetch function
        
    }, []);

    
    return ( 
        <div className="FETCHED">
            {/* <POSTSLIST data={data}/> */}
        </div>
     );
}
 
export default FETCHED;