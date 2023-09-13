import './PostsList.css'
import React, { useState, useEffect } from 'react';


const POSTSLIST = () => {

    const [likeBtnColors, setLikeBtnColors] = useState({});


    useEffect(() => {
        const savedColors = JSON.parse(localStorage.getItem('likeBtnColors'));

        if (savedColors) {
            setLikeBtnColors(savedColors);
        }

             }, []);

    // Save the likeBtnColors state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('likeBtnColors', JSON.stringify(likeBtnColors));

       // const existingLikeBtnColor = JSON.parse(localStorage.getItem("likeBtnColors")) || [];

    }, [likeBtnColors]);

    



    //receive joke data from FETCHED
    const [joke, setJoke] = useState('');
    const [IMAGE, setIMAGE] = useState('');
    const [IMAGE2, setIMAGE2] = useState('');
    const [quote, setQuote] = useState('');

    // Getting our joke
    useEffect(() => {
        // Define the fetching logic inside the useEffect hook
        
            fetch('https://icanhazdadjoke.com/', {
                method: 'get',
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Store the joke data in the state
                setJoke(data.joke);
            })
            .catch((error) => {
                // Handle any errors that occur during the fetch
                console.error('Error fetching data:', error);
            });

            fetch('https://picsum.photos/200/300')
            .then((response) => {
                return response.url;
              })
              .then((imageUrl) => {
                // Now, you can set the state variable IMAGE with the imageUrl
                setIMAGE(imageUrl);
              })
              .catch((error) => {
                // Handle any errors that occur during the fetch
                console.error('Error fetching data:', error);
            });

            fetch('https://picsum.photos/400/300')
            .then((response) => {
                return response.url;
              })
              .then((imageUrl) => {
                // Now, you can set the state variable IMAGE with the imageUrl
                setIMAGE2(imageUrl);
              })
              .catch((error) => {
                // Handle any errors that occur during the fetch
                console.error('Error fetching data:', error);
            });

            fetch('https://api.themotivate365.com/stoic-quote')
            .then(response => response.json())
            .then((response) => {
                return response.quote;
              })
              .then((imageUrl) => {
                // Now, you can set the state variable IMAGE with the imageUrl
                setQuote(imageUrl);
              })
              .catch((error) => {
                // Handle any errors that occur during the fetch
                console.error('Error fetching data:', error);
            });

              
            
       
        
    }, []);

    const posts = [

        {
            userName: "Andile Zondo",
            post: joke ? `${joke} 😂😂` : "Loading...",
            userPP: "",
            id: 1

        },
        
        {
            userName: "user-name",
            post: IMAGE ? <img src={IMAGE} alt="" /> : "Loading..." ,
            userPP: "",
            id: 2

        },
        
        {
            userName: "user-name",
            post: IMAGE2 ? <img src={IMAGE2} alt="" /> : "Loading..." ,
            userPP: "",
            id: 3
        },
        
        {
            userName: "user-name",
            post: joke ? `${quote} ` : "Loading...",
            userPP: "",
            id: 4
        }
        
    ]
 
    function showUserOpts(postId) {
        const btn = document.querySelector(`.user-opt-${postId}`);
        const getStyle = window.getComputedStyle(btn);
        const display = getStyle.getPropertyValue('display');

        display === 'none' ? btn.style.display = 'block' : btn.style.display = 'none';
    }

    function disableOpts() {
        const btn = document.querySelector(`.user-opt`);
        const getStyle = window.getComputedStyle(btn);
        const display = getStyle.getPropertyValue('display');

       if ( display === 'block'){
         btn.style.display = 'none';
       }
    }

    return (
        <div className="POSTSLIST">
            {posts.map((post) => (
                <div className="user-content post-preview" key={post.id}>
                    <div className="user-opt-btn cursor" onClick={() => showUserOpts(post.id)}>...</div>
                    <ul className={`user-opt user-opt-${post.id}`}>
                        <li className='cursor'>Remove Post</li>
                        <li className='cursor'>Report</li>
                        
                    </ul>

                    <div className="user" onClick={disableOpts}>
                        <div className="user-pp cursor">{post.userPP}</div>
                        <div className="user-name cursor">{post.userName}</div>
                    </div>
                    
                    <div className="post-content" onClick={disableOpts}>
                        <div className="img-container">
                          {post.post}  
                        </div>
                        
                    </div>
                    
                    <div className="user-reponse-btn" onClick={disableOpts}>
                        <div className="like-btn cursor" style={{ color: likeBtnColors[post.id] === 'blue' ? 'blue' : 'black' }}
                            onClick={() => handleLikeBtnClick(post.id)}>
                            like
                        </div>
                        <div className="share-btn cursor">
                            share
                        </div>
                    </div>
                </div>
            ))}

            <div className="share-post">
                
            </div>
        </div>

    );

    function handleLikeBtnClick(postId) {
        // Toggle the color when the like button is clicked
        setLikeBtnColors((prevColors) => ({
            ...prevColors,
            [postId]: prevColors[postId] === 'blue' ? 'black' : 'blue',
        }));
    }


}
 
export default POSTSLIST;