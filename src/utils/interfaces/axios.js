import React,{ useEffect, useState} from "react";
import axios from 'axios';
import { getAllJSDocTagsOfKind } from "typescript";
function Axios(){
    let valueInitial ={
        url :"",
        author_id:1011
    };
    const [formValue,setFormValue]=useState(valueInitial);
    const[gifList, setGifList]=useState([]);

    const handleChange =(event)=>{
        setFormValue({...formValue,[event.target.name]:event.target.value});
    }

    useEffect (()=>{
        axios
        .get ("https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=1011"+valueInitial.author_id)
        .then((response)=>{
            console.log(response.data);
            setGifList(response.data);
        })
        
    },[]);

    return (
        <div style ={{display:'flex', justifyContent:'center'}}>
            key={task.id}
            url={task.url}
            </div>
            
           
    )
}
export default Axios;
