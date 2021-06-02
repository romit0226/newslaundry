import React from 'react'
import './Card.css'

function card ({title,imagesource,body}) {
    return(
    <div className='card-container'> 
    <div className="image-container">
        <img src={imagesource} />
    </div>
    
     <div className="card-content">
      <div className="Card-title">
         <h3>{title}</h3>
       </div>
      <div className="Card-Body">
         <p>{body}</p>
      </div>

     </div>
     <div className="btn">
         <button>
             <a>
                 view more
             </a>
         </button>
     </div>
    </div>
    )

}
export default card