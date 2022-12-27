import React, { useState } from "react";

const useTodo =()=>{
const [tasksList,setTaskslist]=useState([]);
const [completedTaskList, setCompletedTaskList]=useState([]);
const addTask = (title: string)=>{};
const deleteTask =(id:number)=>{};
const completedTask =(id:number)=>{};
return{
    tasksList,
    completedTaskList,
    addTask,
    deleteTask,
    completedTask,
};
};
export default useTodo;