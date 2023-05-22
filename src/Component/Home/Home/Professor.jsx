import { useEffect, useState } from "react";
import ProfessorCard from "./professorCard";



const Professor = () => {
     const [professor,setprofessor]=useState([]);


     useEffect( ()=>{
           fetch("http://localhost:5000/professor")
           .then(res=>res.json())
           .then(data=>setprofessor(data));
     } , []);


     console.log(professor);
     return (
          <div>
                <h1 className=" text-5xl text-black font-bold text-center my-3 mt-8"> Professor</h1>
                <div className=" h-2 w-80 mb-10 bg-[#FACC15] rounded text-center  mx-auto"></div>
               
                <div className=" grid md:grid-cols-3 gap-3">
                    {professor && professor.map(pro=><ProfessorCard key={pro._id} professor={pro}></ProfessorCard>  )}
                </div>
               
          </div>
     );
};

export default Professor;