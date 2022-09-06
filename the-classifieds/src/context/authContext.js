import {fireBaseAuth} from '@utils/fireBaseUtility';
import React, {useReducer,useState, createContext, useEffect} from 'react';
import { onAuthStateChanged, getIdTokenResult  } from "firebase/auth";
import { useRouter } from 'next/router';
import axios from 'axios'
import swal from 'sweetalert';


const firebaseReducer = (state, action) => {
    switch(action.type){
        case "LOGGED_IN_USER":
            return {...state, user: action.payload}
        default:
            return state
    }
}

//reducer functions update state
const initialState = {
    user: null,
};


//create context
const AuthContext = createContext();

const DjangoAuthContext = createContext();



const DjangoAuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [error, setError] = useState(null)
    const [updated, setUpdated] = useState(null)

    const router = useRouter();


    useEffect(() => {
        if(!user){
            getCurrentUser()
        }
    }, [user])

    const login = async ({username, password}) => {
        console.log("I ran");
        
        try {
            setLoading(true);
            const res = await axios.post('/api/auth/login', 
            {username, password});
            if(res.data.success){
                getCurrentUser()
                setIsAuthenticated(true);
                setLoading(false);
                router.push("/");
            }
        } catch(error){
            setLoading(false);
            setError(error.response && (error.response.data.detail || error.response.data.error))
        }
    }

    const getCurrentUser = async () => {

        try {
            setLoading(true);
            const res = await axios.get('/api/auth/user');
            if(res.data.user){
                setIsAuthenticated(true);
                setLoading(false);
                setUser(res.data.user);
            }
        } catch(error){
            setLoading(false);
            setIsAuthenticated(false);
            setUser(null);
            setError(error.response && (error.response.data.detail || error.response.data.error))
        }
    }

    const logout = async () => {

        try {
            const res = await axios.post('/api/auth/logout');
            if(res.data.success){
                setIsAuthenticated(false);
                setUser(null);
                swal({
                    title: `Success, You have successully logged out`,
                    icon: "success",
                });
            
                router.push("/")
                  
            }
        } catch(error){
            setLoading(false);
            setIsAuthenticated(false);
            setUser(null);
            setError(error.response && (error.response.data.detail || error.response.data.error))
        }
    }


    const register = async ({firstName, lastName, password, email, confirmPassword}) => {
        console.log("I ran");

       
        
        try {
            const res = await axios.post(`${process.env.API_URL}/register/`, 
            {first_name:firstName, last_name:lastName, email, password, password2:confirmPassword});

            console.log(res)
            setLoading(true);
            
            if(res.data.message){
                setLoading(false);
                router.push("/sign-in");
            }
        } catch(error){
            setLoading(false);
            setError(error.response)
        }
    }


    const updateUser = async({firstName, lastName, email, password, avatar}, access_token) => {
        try {
            setLoading(true);

            const res = await axios.post(`${process.env.API_URL}/updateprofile/`, {
                first_name:firstName,
                last_name:lastName,
                email,
                password,
                profile_picture:avatar
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                },
            });
            if(res.data){
                setLoading(false);
                setUpdated(true);
                setUser(res.data);
                
            }
        } catch(err){
            swal({
                title: `Error Updating your profile`,
                icon: "error",
            });
        }
    }

    //Clear Errors
    const clearErrors = () => {
        setError(null);
    }

    const[state, dispatch] = useReducer(firebaseReducer, initialState);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(fireBaseAuth, async (user) => {
            if(user){
                const idTokenResult = await getIdTokenResult(user);

                dispatch({
                    type:'LOGGED_IN_USER',
                    payload:{email: user.email, token:idTokenResult.token}
                });
            } else{
                dispatch({
                    type:'LOGGED_IN_USER',
                    payload: null
                });
            }
        })

        return () => unsubscribe();
    }, [])

    return (
        <DjangoAuthContext.Provider value={{
            loading,
            user,
            isAuthenticated,
            error,
            login,
            logout,
            register,
            clearErrors,
            state,
            dispatch,
            updateUser,
            setUpdated,
            updated
        }}>
            {children}
        </DjangoAuthContext.Provider>
    )
}


//context provider
const AuthProvider = (props) => {
    const[state, dispatch] = useReducer(firebaseReducer, initialState);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(fireBaseAuth, async (user) => {
            if(user){
                const idTokenResult = await getIdTokenResult(user);

                dispatch({
                    type:'LOGGED_IN_USER',
                    payload:{email: user.email, token:idTokenResult.token}
                });
            } else{
                dispatch({
                    type:'LOGGED_IN_USER',
                    payload: null
                });
            }
        })

        return () => unsubscribe();
    }, [])

    const value = {state, dispatch};
    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

//export

export {AuthContext, AuthProvider, DjangoAuthContext, DjangoAuthProvider};