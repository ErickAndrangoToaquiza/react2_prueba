import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import TasksList from "../../organisms/taskslist/tasks-list";
import "./to-do.scss"
const ToDo =() =>{
    return (
        <div className="to-do">
            <h1 className="to-do__title">GIF GALERY</h1>
            <div className="to-do__header">
            <Input
            value={""}
            name="addTask"
            onChange={()=>{
                console.log("va a guardar");
            }}
            
            placeholder={"Gift URL"}
            />
             <Button onClick={()=> console.log("va a agregar")}>Agregar</Button>
            </div>
         
             <TasksList tasks={[]}/>

             <img src="https://media.tenor.com/VW4mxkYVimsAAAAM/avengers-end-game.gif" />

           

        </div>
    );
    
}
export default ToDo