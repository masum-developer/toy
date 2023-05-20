import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `My Avengers -${title}`;
    },[title])
};


export default useTitle;