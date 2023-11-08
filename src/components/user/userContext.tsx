import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext({
    user: null,
    dispatch: (action: any) => {}, 
});

export function useUser() {
    return useContext(UserContext);
}

const initialState = {
    user: null,
};  

export function UserProvider({ children }) {
    const [user, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}

function userReducer(state:any, action:any) {
    switch (action.type) {
        case 'LOGIN':
            return action.user;
        case 'LOGOUT':
            return null;
        default:
            return state;
    }
}
