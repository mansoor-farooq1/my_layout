import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
// import Signup from '../pages/Signup'
import StatusGrid from '../pages/StatusGrid'
import Sapservice from '../pages/sapservice'


const Addroute = () => {
    return (
        <Routes>


            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sapservices' element={<StatusGrid />} />
            {/* <Route path='/signup' element={<Signup />} /> */}
            <Route path='/statusgrid' element={<Sapservice />} />

        </Routes>
    )
}

export default Addroute
