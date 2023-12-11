import { Navigate } from "react-router-dom";
 


const ProtectedProvider = ({  children }) => {
    const accessToken = localStorage.getItem('AccessToken');
    const logining = localStorage.getItem('logIn');
    
    const AccountType = localStorage.getItem('AccountType')||true;

    if (logining) {
        return <Navigate to="/SignIn" replace />;
    } else {
             return children;         
    }


};
export default ProtectedProvider;


