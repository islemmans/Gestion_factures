
import { useSelector } from "react-redux";


const TasksHeader = () => {
   
    const tasks=useSelector((state=>state.user));
    return (
      <header>
        <h1>React Todo List</h1>
        <p>
          Tâches à faire : 
        </p>
      </header>
    );
  };
  
  export default TasksHeader;