import { ReactNode, createContext, useContext, useReducer } from 'react';

const UserContext = createContext({
    user: null as any,
    dispatch: (action: any) => {}, 
});

export function useUser() {
    return useContext(UserContext);
}

    const initialState = {
        user: null,
    };  
    interface UserProviderProps {
        children: ReactNode;
    }

export function UserProvider({ children }: UserProviderProps) {
    const [user, dispatch] = useReducer(userReducer, initialState);
    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}

function userReducer(state:any, action:any) {
    console.log("UserProvider state:", state," action:", action);
    switch (action.type) {
        case 'LOGIN':
            console.log("Dispatching LOGIN action:", action.user);
            return  { ...state, user: action.user };
        case 'LOGOUT':
            console.log("Dispatching LOGOUT action");
            return { ...state, user: null };
        default:
            return state;
    }
}
