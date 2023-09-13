
import './Home.css'
import POSTSLIST from './PostsList';



const HOME = () => {

    /* const likeBtn = document.querySelectorAll('.like-btn');
   
    likeBtn.forEach(element => {
        element.addEventListener('click', handleClick);
    })

    function handleClick(e) {
        // Use e.target to access the clicked element
        const clickedElement = e.currentTarget;

        const computedStyle  = window.getComputedStyle(clickedElement);

        const color = computedStyle.backgroundColor
    
        if (color === 'white') {
            clickedElement.style.backgroundColor = 'blue'
        } else {
            clickedElement.style.backgroundColor = 'white'
        }
    } */

    
    
    return ( 
        <div className="HOME">
            <div className="home-content">

                {/* <div className="all-user-content">

                <div className="user-content">

                    <div className="user-opt cursor">...</div>

                    <div className="user">

                        <div className="user-pp cursor"></div>
                        <div className="user-name cursor">user-name</div>
                        
                    </div>

                    <div className="post-content">
                        post details
                    </div>
                    
                    <div className="user-reponse-btn">

                        <div className="like-btn cursor">
                           like
                        </div>

                        <div className="share-btn cursor">
                            share
                        </div>

                    </div>
                </div>

                <div className="user-content">

                    <div className="user-opt cursor">...</div>

                    <div className="user">

                        <div className="user-pp cursor"></div>
                        <div className="user-name cursor">user-name</div>
                        
                    </div>

                    <div className="user-reponse-btn">

                        <div className="like-btn cursor">
                            like
                        </div>

                        <div className="share-btn cursor">
                            share
                        </div>
                        
                    </div>
                </div>

                <div className="user-content">

                    <div className="user-opt cursor">...</div>

                    <div className="user">

                        <div className="user-pp cursor"></div>
                        <div className="user-name cursor">user-name</div>
                        
                    </div>

                    <div className="user-reponse-btn">

                        <div className="like-btn cursor">
                            like
                        </div>

                        <div className="share-btn cursor">
                            share
                        </div>
                        
                    </div>
                </div>

                <div className="user-content">

                    <div className="user-opt cursor">...</div>

                    <div className="user">

                        <div className="user-pp cursor"></div>
                        <div className="user-name cursor">user-name</div>
                        
                    </div>

                    <div className="user-reponse-btn">

                        <div className="like-btn cursor">
                            like
                        </div>

                        <div className="share-btn cursor">
                        share</div>
                        
                    </div>
                </div>

                <div className="user-content">

                    <div className="user-opt cursor">...</div>

                    <div className="user">

                        <div className="user-pp cursor"></div>
                        <div className="user-name cursor">user-name</div>
                        
                    </div>

                    <div className="user-reponse-btn">

                        <div className="like-btn cursor">
                            like
                        </div>

                        <div className="share-btn cursor">
                        share</div>
                        
                    </div>
                </div>


                </div> */}

                <div className="all-user-content">
                    {POSTSLIST()}
                </div>

                <div className="refresh-btn">
                    <button>refresh</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default HOME;