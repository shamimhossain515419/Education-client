
const Banner = () => {
     return (
          <div className="carousel w-full">
          <div id="slide1" className="carousel-item h-[80vh] relative w-full">
            <img  src="https://i.ibb.co/j3L3ZHn/pexels-photo-5212326.jpg" className="w-full relative" />
          
           <div className=" absolute flex   items-center  w-full h-full bg-gradient-to-r from-[#503676a6] to-[#503676a7] ">
                   <div className=" ml-28">
                   <p className=" text-white text-4xl font-bold my-5"> One team ,one mission</p>
                 <h1 className=" text-7xl font-extrabold my-2 text-white"> Education</h1>
                   </div>
           </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-yellow-400">❮</a> 
              <a href="#slide2" className="btn btn-circle bg-yellow-400">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item h-[80vh] relative w-full">
            <img src="https://images.pexels.com/photos/8926556/pexels-photo-8926556.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full relative" />
            
            <div className=" absolute flex   items-center  w-full h-full bg-gradient-to-r from-[#503676a6] to-[#503676a7] ">
                   <div className=" ml-28">
                   <p className=" text-white text-4xl font-bold my-5"> One team ,one mission</p>
                 <h1 className=" text-7xl font-extrabold my-2 text-white"> Education</h1>
                   </div>
           </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn bg-yellow-400 btn-circle">❮</a> 
              <a href="#slide3" className="btn bg-yellow-400 btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item h-[80vh] relative w-full">
          
            <img src="https://images.pexels.com/photos/8087928/pexels-photo-8087928.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full relative" />
            <div className=" absolute flex   items-center  w-full h-full bg-gradient-to-r from-[#503676a6] to-[#503676a7] ">
                   <div className=" ml-28">
                   <p className=" text-white text-4xl font-bold my-5"> One team ,one mission</p>
                 <h1 className=" text-7xl font-extrabold my-2 text-white"> Education</h1>
                   </div>
           </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn bg-yellow-400 btn-circle">❮</a> 
              <a href="#slide4" className="btn bg-yellow-400  btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide4" className="carousel-item  h-[80vh] relative w-full">
            <img src="https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full relative" />
           <div className=" absolute flex   items-center  w-full h-full bg-gradient-to-r from-[#503676a6] to-[#503676a7] ">
                   <div className=" ml-28">
                   <p className=" text-white text-4xl font-bold my-5"> One team ,one mission</p>
                 <h1 className=" text-7xl font-extrabold my-2 text-white"> Education</h1>
                   </div>
           </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn bg-yellow-400 btn-circle">❮</a> 
              <a href="#slide1" className="btn  bg-yellow-400 btn-circle">❯</a>
            </div>
          </div>
        </div>
     );
};

export default Banner;