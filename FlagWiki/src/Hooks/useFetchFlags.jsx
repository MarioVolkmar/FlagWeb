import { useEffect, useState } from "react";

export const useFetchFlag =(url)=>{
    const [dataFetch, setData]= useState({});

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=> setData(data))
        return dataFetch
    })
}

