import React from 'react';

function Banner(props) {
    return (
        <div>
            <div className="d-flex media">
                <div className="bg-dark w-75  h-39 width-percentage text-white p-5" style={{
                    backgroundImage: `url("images/car1.jfif")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"
                }}>

                    <h1 className="font-bold  font-34 whitespace-nowrap">OUR BLOG</h1>
                </div>
                <div className="bg-secondary h-39 text-white text-left p-5 w-75 width-percentage">
                    <h2>Diagnose Car Problems if You Dont Know Much About Cars
                    </h2>
                    <p className="f-12 mt-1"> Aliquid amet commodi deserunt eos ex fugiat, harum iste <br/>mollitia non odit placeat possimus quaerat quo tenetur vitae voluptatum.</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;