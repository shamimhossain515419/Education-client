import { useLoaderData } from "react-router-dom";
import { FaBook, FaFacebook, FaGoogle,  FaInstagram,  FaInstagramSquare, FaPepperHot, FaTwitter } from 'react-icons/fa';

const ProfessoreVeiw = () => {

     const professor = useLoaderData();
     console.log(professor);
     const { image1, quote, price, image, reliable, projects, completed, qualifications, experience, degree, level, skills, description, title, name } = professor;


     return (
          <div>
               <div className="hero h-[80vh]" style={{ backgroundImage: `url("https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1600")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                         <div className="">
                              <h1 className="mb-5 text-7xl font-bold">College Seminar “Leadership & Works”</h1>

                         </div>
                    </div>
               </div>


               <div className="grid md:grid-cols-3 mt-9 gap-4 p-3">
                    <div className=" col-span-2">
                         <div>
                              <img className=" w-full h-[50vh]" src={image} alt="" />
                              <h2 className=" text-2xl font-bold my-3"> {title}</h2>
                              <p className="my-2"> {description}</p>
                              <p className=" text-lg mt-1 font-medium">Skills: {skills}  </p>
                              <p className=" text-lg mt-1 font-medium">Experience: {experience}  </p>
                              <p className=" text-lg mt-1 font-medium">Qualifications: {qualifications}  </p>
                              <p className=" text-lg mt-1 font-medium">Experience: {projects}  </p>
                              <p className=" text-lg mt-1 font-medium">Completed: {completed}  </p>
                              <div className=" flex gap-3  items-center ">
                                   <FaPepperHot className=" text-[#dc07d9]  text-2xl"></FaPepperHot>
                                   <p className=" text-lg mt-1 font-medium">level: {level}  </p>
                              </div>

                              <div className=" flex gap-3  items-center ">
                                   <FaBook className=" text-[#dc07d9]  text-2xl"></FaBook>
                                   <p className=" text-lg mt-1 font-medium">College, Education, Study, Technology  </p>
                              </div>
                              <div className=" flex gap-2 items-center my-6">
                                   <div className=" text-white   w-28 items-center flex gap-3 bg-blue-500 rounded-xl py-1 px-3  "> <FaFacebook  className=" text-xl font-medium"></FaFacebook> facebook </div>
                                   <div className=" text-white   w-28 items-center flex gap-3 bg-red-500 rounded-xl py-1 px-3  "> <FaGoogle  className=" text-xl font-medium"></FaGoogle> google </div>
                                   <div className=" text-white   w-28 items-center flex gap-3  bg-purple-500 rounded-xl py-1 px-3  "> <FaInstagramSquare  className=" text-xl font-medium"></FaInstagramSquare>instagram </div>
                                   <div className=" text-white   w-28 items-center flex gap-3 bg-blue-500 rounded-xl py-1 px-3  "> <FaTwitter  className=" text-xl font-medium"></FaTwitter> twitter </div>
                              </div>
                         </div>
                    </div>


                    <div className=" col-span-1">
                         <div>
                              <div className=" text-center">
                                   <button className=" border-dotted border-2 py-1 px-4  border-[#dc07d9] inline-block mx-auto  text-center  rounded-2xl"> About Author</button>
                              </div>
                              <div className=" text-center mt-2">
                                   <img className=" mx-auto mt-7 mb-2" style={{ borderRadius: "50%", height: "150px", width: "150px" }} src={image1} alt="" />
                                   <h1 className=" text-2xl font-medium text-black"> {name}</h1>
                                   <p className=" text-lg my-1 font-medium "> {quote}</p>
                              </div>

                             <div className="  justify-center text-[#dc07d9]  mt-5  flex gap-4 items-center ">
                              <FaFacebook className=" cursor-pointer "></FaFacebook>
                              <FaGoogle className=" cursor-pointer "></FaGoogle>
                              <FaInstagram className=" cursor-pointer "></FaInstagram>
                              <FaTwitter className=" cursor-pointer "></FaTwitter>
                             </div>
                             <div className=" text-center">
                                   <button className=" border-dotted border-2 py-1 px-4  border-[#dc07d9] inline-block mx-auto  text-center  rounded-2xl mt-8"> Resent Post</button>
                              </div>
                               <div>
                                   <div className=" flex gap-3 my-3 ">
                                        <div>
                                        <img className="w-24 h-24 rounded-xl mx-1 " src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img13-800x533.jpg" alt="" />

                                        </div>
                                        <div>
                                             <h1 className="  hover:underline  text-lg  font-semibold my-2"> 12th Batch Student’s Convocational Day</h1>
                                             <p className=" text-sm "> June 15, 2022  No Comments</p>
                                        </div>
                                   </div>
                                   <div className=" flex gap-3 my-3 ">
                                        <div>
                                        <img className="w-24 h-24 rounded-xl mx-1 " src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img15-300x200.jpg" alt="" />

                                        </div>
                                        <div>
                                             <h1 className="  hover:underline  text-lg  font-semibold my-2"> College Seminar “Leadership & Works”</h1>
                                             <p className=" text-sm "> June 29, 2022  No Comments</p>
                                        </div>
                                   </div>
                                   <div className=" flex gap-3 my-3  ">
                                        <div>
                                        <img className="w-24 h-24 rounded-xl mx-1 " src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12-300x200.jpg" alt="" />

                                        </div>
                                        <div>
                                             <h1 className="  hover:underline  text-lg  font-semibold my-2"> Group Of Students Sharing Their Ideas</h1>
                                             <p className=" text-sm "> May 15, 2022  No Comments</p>
                                        </div>
                                   </div>
                               </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProfessoreVeiw;