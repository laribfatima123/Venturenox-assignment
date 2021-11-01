import React from 'react';
import Card from "./Card";
import Banner from "./Banner";
import Detail from "./Detail";
const Blog=(props)=> {
    return (
        <div>
         <Banner/>
               <Detail/>
            <div className="container">
              <Card/>
               <div className="d-flex justify-content-center my-5 pt-5">
                   <button className="btn btn-secondary">
                       Load More
                   </button>
               </div>
            </div>
        </div>
    );
}

export default Blog;