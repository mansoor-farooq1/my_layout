import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


const Addroute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/login' element={<Login />} />

            <Route path='/signup' element={<Signup />} />

        </Routes>
    )
}

export default Addroute
