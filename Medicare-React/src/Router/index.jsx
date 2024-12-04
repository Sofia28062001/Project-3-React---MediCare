/*AQUI ES DONDE SE PONEN LAS RUTAS PARA LLEVAR A OTRAS VISTAS*/

import { createBrowserRouter, redirect } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import CreateUserView from '../Pages/CreateUser/CreateUser';
import PatientView from '../Pages/PatientView/PatientView';
import DoctorView from '../Pages/DoctorView/DoctorView';


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomePage/>
        },
        { path: '/signup', element: <CreateUserView/>},
        { path: '/patient', element: <PatientView/>},
        { path: '/doctor', element: <DoctorView/>}

    ]

)

export default router
