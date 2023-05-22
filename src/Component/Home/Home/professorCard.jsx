import { Link } from "react-router-dom";


const ProfessorCard = ({ professor }) => {
     const { name, title, degree , _id, price, image,  } = professor;
     console.log(_id);
     return (
          <div>
               <div className=" ">
                    <div className="">
                         <div className=" w-full">
                              <div className="bg-white w-full relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                                   <img className="rounded-t-lg   h-80 w-full" src={image} alt="" />
                                   <div className="py-6 px-8 rounded-lg space-y-2 bg-white">
                                        <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{name}</h1>
                                        <p className="text-gray-700  text-lg font-medium tracking-wide"> Degree: {title}</p>
                                        <p className="text-gray-700  text-lg font-medium tracking-wide"> Title: {degree}</p>
                                        <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"><Link to={`/professorView/${_id}`}> View Details </Link></button>
                                   </div>
                                   <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                                        <span className="text-md  font-medium">${price}</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProfessorCard;