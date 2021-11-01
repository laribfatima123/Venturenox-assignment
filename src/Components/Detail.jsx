import React from 'react';

function Detail(props) {
    return (
        <div className="jumbotron">
           <div className="container bg-white d-flex justify-content-center  mt-5 pt-5 media pb-5">
               <div>
                   <img src="images/car.jfif" className="width-image-res"/>
               </div>
               <div className="d-flex flex-column margin-left">
                <div className="d-flex justify-content-between">
    <div className="d-flex justify-content-between">
    <div className="f-12 grey whitespace-nowrap">
        Posted on october 6th 2021

    </div>
    <div className="d-flex">
        <div className="img-width ml-4">
            <img src="images/watch.jfif"/>
        </div>
        <div className="f-12 grey whitespace-nowrap ml-1">
            535 Veiws
        </div>
    </div>
</div>
    <div className="grey text-danger f-12">
        <a href="#">FEATURED</a>
    </div>
</div>
                   <div>
                       <h2 className="styling text-left">Should I buy a New Car or Lease a new Car in 2021?</h2>
                   </div>
                   <div className="f-12 text-left">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Delectus dicta doloribus ea esse impedit<br/> numquam officiis quo quos sed tenetur!
                       Accusamus, accusantium <br/>consectetur eos eveniet libero minima provident quaerat sed!
                   </div>
                   <div className="d-flex align-items-center">
                       <div className="text-left my-3 f-12">READ MORE</div><div className="ml-2">
                       <i className="fas fa-long-arrow-alt-right"></i>
                   </div></div>
               </div>
           </div>
































        </div>
    );
}

export default Detail;