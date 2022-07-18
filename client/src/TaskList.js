import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";


const TasksList = () => {
    const tasks=useSelector((state=>state.user));
  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
      
          key={t.login}
         // login={t.login}
          password={t.password}
          domaine={t.domaine}
        />
      ))}
    </>
  );
};

export default TasksList;