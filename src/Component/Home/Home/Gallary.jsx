

const Gallary = () => {
     return (
          <div>
               <h1 className=" text-5xl text-black font-bold text-center my-3 mt-8"> My Gallary</h1>
                <div className=" h-2 w-80 mb-10 bg-[#FACC15] rounded text-center  mx-auto"></div>
                <div className=" grid md:grid-cols-4 gap-7 ">
                    <img className="w-full h-80 rounded-md overflow-hidden" src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600 " alt="" />
                    <img className="w-full h-80 rounded-md overflow-hidden" src="https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&w=1600 " alt="" />
                    <img className="w-full h-80 rounded-md overflow-hidden" src=" https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <img className="w-full h-80 rounded-md overflow-hidden" src=" https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <img className="w-full h-80 rounded-md overflow-hidden" src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1600 " alt="" />
                    <img className="w-full h-80 rounded-md overflow-hidden" src="https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=1600 " alt="" />
                    <img className="w-full h-80 rounded-md overflow-hidden" src=" https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <img className="w-full h-80 rounded-md overflow-hidden" src=" https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </div>
          </div>
     );
};

export default Gallary;