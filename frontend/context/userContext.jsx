//for keeping the user logged in

import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => { //anytime page renders
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data);
            }).finally(() => {
                setLoading(false);
            })
        }
    }, []);
    
    const logout = async() => {
        await axios.post('/logout');
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user, setUser, logout}}>
            {children}
        </UserContext.Provider>
    )
}

