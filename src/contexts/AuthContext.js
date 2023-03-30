import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import {authServiceFactory} from '../services/authService';
//expose context
export const AuthContext = createContext();

//wraper component provider with all functionality
export const AuthProvider = ({
  children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth',{});//state persist in local storage
    const navigate = useNavigate()
    const authService = authServiceFactory(auth.accessToken)
    
    const onLoginSubmit = async (data) =>{
        try{
          //result from server with token
          const result = await authService.login(data);
          
          //store to state
          setAuth(result)
    
          navigate('/catalogue')
        }catch(error){
          //to do show on screen
          console.log('There is something wrong with your email or password')
        }
        
    };

    const onRegisterSubmit = async (values) =>{
    const{ rePassword, ...registerData} = values;
    if (rePassword !== registerData.password){
      return;
    }
    try{
      //result from server
      const result = await authService.register(registerData);
      
      //set to state
      setAuth(result);

      navigate('/catalogue')
    }catch(error){
      //to do show on screen
      console.log('There is something wrong')
    }
    };
    const onLogout = async () => {

        // from server
        await authService.logout();
    
        //zero obj from client
        setAuth({});
        
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId : auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        //double-negation turns Truthy to Falsy then again to Truthy
        isAuthenticated: !!auth.accessToken,
      
      };
    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

//hook expose easy way to context
export const useAuthContext = () => {
  const context = useContext(AuthContext)
  return context
}