


import App from '../../App'
import LayoutProvider from '../LayoutProvider/LayoutProvider'
import { Outlet, Navigate } from 'react-router-dom'

const authData = localStorage.getItem('authData');
// const authData = true;
console.log(authData);

const PrivateRoutes = () => {
    let auth = {'token':authData}
    return(
        auth.token ? <App/> : <Navigate to="/SignIn"/>
    )
}

export default PrivateRoutes