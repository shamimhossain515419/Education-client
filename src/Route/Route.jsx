import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Leyout/Main";
import Home from "../Component/Home/Home";
import ProfessoreVeiw from "../Component/Home/Home/ProfessoreVeiw";
import Login from "../User/Login";
import Ragister from "../User/Ragister";


const Route = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/professorView/:id',
                    element: <ProfessoreVeiw></ProfessoreVeiw>,
                    loader: ({ params }) => fetch(`http://localhost:5000/professor/${params.id}`)

               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/ragister',
                    element: <Ragister></Ragister>
               }
          ]
     }
])

export default Route;