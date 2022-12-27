import { FC } from "react";
import { Task } from "../../../utils/interfaces/Task";
import Card from "../../moleculas/card/card";
import "./tasks-list.scss"

interface TasksListProps{
tasks:Task[];
}

const TasksList:FC<TasksListProps>=({tasks})=>{
    if(tasks.length===0)return<h2 className="tasks-list_title"></h2>
    return (
        <div className="tasks-list">
            {tasks?.map((task, index)=>(
                <Card key= {`task-${index}`}title={task.title}/>
            ))}
        </div>
    );
};
export default TasksList;