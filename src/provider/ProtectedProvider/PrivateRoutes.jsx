


import App from '../../App'
import LayoutProvider from '../LayoutProvider/LayoutProvider'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = {'token':false}
    return(
        auth.token ? <App/> : <Navigate to="/SignIn"/>
    )
}

export default PrivateRoutes