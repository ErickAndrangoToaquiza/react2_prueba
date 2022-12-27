import React, { createContext, FC } from "react";
import { Task } from "../../utils/interfaces/Task";
import useTodo from "./use-todo/use-todo";

export interface TodoStateContext{
    tasklist: Task[];
    completedTaskList:Task[];
    addTask:(title:string)=>void;
    completeTask:(id: number)=>void;
    deleteTask:(id:number)=>void;
}

export interface ToDoProviderProps{
    children: React.ReactNode;
}
export const TodoContext = createContext<TodoStateContext>(
    {} as unknown as TodoStateContext
);
//export const ToDoProvider:FC<ToDoProviderProps>=({children})=>{
    //const values =useTodo();
  //  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;};

