import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { AuthContext } from "../../Authprpvider/Authprovider";
const Navber = () => {
     const [acctive, SetAccticve] = useState(false);
     const { user,loading, Logout } = useContext(AuthContext)
     const [logout, setlogout] = useState(true)
     const [display, serdisplay] = useState(false)
     const handleLogout = () => {
          Logout().then(result => {
               console.log(result);
          }).catch(error => {
               console.log(error.massage);
          })
     }
     return (
          <div className=" shadow-md px-3 bg-[#fff]">

               <div className=" md:flex gap-2  justify-between items-center">
                    <div className=" flex justify-between items-center">
                         <h1><Link to={'/'}> <img className="  w-40 object-contain h-20 " src='https://i.ibb.co/F5xG767/education-logo.jpg' alt="" /> </Link></h1>
                         <div className="md:hidden">
                              <button onClick={() => SetAccticve(!acctive)}> {acctive ? <FaTimes></FaTimes> : <FaBars></FaBars>} </button>
                         </div>
                    </div>

                    <div className={` mt-5 md:flex gap-3 ${acctive ? 'block' : " hidden"}`}>
                         <div className=" md:flex gap-3  ">
                              <NavLink className={({ isActive }) => isActive ? " text-xl block  font-semibold m-3  text-blue-600" : " text-xl block font-semibold m-3 "} to={'/'}>Home</NavLink>
                              <NavLink className={({ isActive }) => isActive ? " text-xl block font-semibold m-3  text-blue-600" : " text-xl block font-semibold m-3 "} to={'/alltoys'}>All Professor</NavLink>
                              <NavLink className={({ isActive }) => isActive ? " text-xl block  font-semibold m-3  text-blue-600" : " text-xl block font-semibold m-3 "} to={'/blog'}>Blogs</NavLink>
                         </div>
                         <div>
                           {loading  ? "" :  <div>
                              {user ? <div className=" relative md:flex gap-3 ">
                                   <NavLink to={'/mytoy'} className={({ isActive }) => isActive ? " text-xl  block font-semibold m-3  text-blue-600" : " text-xl  font-semibold m-3  block"} >My Professor</NavLink>
                                   <NavLink to={'/addtoy'} className={({ isActive }) => isActive ? " text-xl  block  font-semibold m-3  text-blue-600" : " text-xl  font-semibold m-3  block "} >Add A Professor</NavLink>
                                   <img onClick={() => setlogout(!logout)} className="  cursor-pointer relative h-10 w-10 rounded-full m-2" src={user.photoURL
                                   } alt="" />
                                   <h1 className={` ${display ? "block" : "  hidden "} absolute top-0 right-11 bg-white p-2  text-blue-600  text-lg`} > {user.displayName} </h1>
                                   <div className={`  absolute  top-12  -right-3  opacity-100 z-50 bg-white p-2 rounded shadow-lg  ${logout ? " hidden" : 'block'}`}>
                                        <Link onClick={handleLogout} className="text-xl   block font-semibold m-3  bg-blue-600 py-1 px-4  text-white rounded-md  "> Logout </Link>
                                   </div>

                              </div> : <div className=" md:flex gap-3 items-center ">
                                   <FaUser className=" block m-3"></FaUser>
                                   <Link to={'/login'} className="text-xl  block font-semibold m-3  bg-blue-600 py-1 px-4  text-white rounded-md  "> Login</Link>
                              </div>
                              }
                              </div>}
                         </div>



                    </div>
               </div>

          </div>
     );
};

export default Navber;