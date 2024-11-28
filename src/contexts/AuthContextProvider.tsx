 import React, {createContext, useReducer, useEffect} from "react";

interface ValidUser{
    username: string;
    token: string
}

interface UserState {
    user: ValidUser | null ;
  }

interface User{
    user: ValidUser | null ;
}

interface AuthType{
    children: React.ReactNode
}

interface ActionType {
    type: "LOGIN" | "LOGOUT";
    // payload?: ValidUser;
    payload?: ValidUser;
  }

export const AuthContext = createContext<{
    user: ValidUser | null;
    dispatch: React.Dispatch<ActionType>;
  }> ({
    user: null,
    dispatch: () => undefined, // Default value to prevent runtime errors
  });

const authReducer = (state: User, action: ActionType): UserState => {

    switch(action.type){
        case "LOGIN": 
            return { user: action.payload || null };
        case "LOGOUT":
            return { user: null };
        default:
            return state
    }

}

export const AuthContextProvider = ({ children }: AuthType) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
      const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;

      if(user){
          dispatch({type: "LOGIN", payload: user});
          console.log(`${user.username} is logged In`);
      }
  },[]);

    console.log(`AuthContext State: `, state);

  return (
    <AuthContext.Provider value={ { ...state, dispatch }}>
        {children}
    </AuthContext.Provider>
  )
}
