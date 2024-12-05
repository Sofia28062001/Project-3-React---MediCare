/*AQUI ES DONDE SE PONEN LAS RUTAS PARA LLEVAR A OTRAS VISTAS*/

import { createBrowserRouter } from 'react-router-dom';
import Home from '../../src/Home';
import CreateUserView from '../Pages/CreateUser/CreateUser';
import PatientView from '../Pages/PatientView/PatientView';
import DoctorView from '../Pages/DoctorView/DoctorView';


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home/>
        },
        { path: '/signup', element: <CreateUserView/>},
        { path: '/patient', element: <PatientView/>},
        { path: '/doctor', element: <DoctorView/>}

    ]

)

export default router
