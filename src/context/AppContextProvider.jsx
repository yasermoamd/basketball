import { useEffect, useState } from "react";
import AppContext from "./AppContext";
import postdata from '../assets/data/posts.data.json';


export default function AppContextProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin ] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [posts, setPosts ] = useState([])
    const [ pageNumber, setPageNUmber] = useState(0);

    useEffect(() => {
        setPosts(postdata);
        
    },[])
    const value = {
        searchTerm,
        setSearchTerm,
        isOpen,
        setIsOpen,
        isLogin,
        setIsLogin,
        isRegister,
        setIsRegister,
        posts, 
        setPosts 
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}