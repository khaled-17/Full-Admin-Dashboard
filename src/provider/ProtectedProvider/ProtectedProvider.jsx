import { Navigate } from "react-router-dom";
 


const ProtectedProvider = ({  children }) => {
    const accessToken = localStorage.getItem('AccessToken');
    const logining = localStorage.getItem('authData');
    
    const AccountType = localStorage.getItem('AccountType')||true;

    console.log(logining)
    if (!logining) {
        return <Navigate to="/SignIn" replace />;
    } else {
             return children;         
    }


};
export default ProtectedProvider;


