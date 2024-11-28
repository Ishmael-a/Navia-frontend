import { AuthContext } from "../contexts/AuthContextProvider"
import { useContext } from "react"

const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw Error('useAuthContext should be used within the AuthContext.Provider ')
    }


  return context;
}


export default useAuthContext;