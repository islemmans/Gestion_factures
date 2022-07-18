import { useDispatch } from "react-redux";
import { modifutil ,supputil } from "./redux/slices/User";

const TaskItem = (props) => {
    const { task } = props;
    const dispatch= useDispatch() ;
  
    return (
      <div>
        <label>
          <input
            type="checkbox"
         //  checked={task.done}
            onChange={() => dispatch(modifutil( task.login) )}  />
          {task.login}
          
          <span
            onClick={() =>dispatch(supputil(task.login))}
            role="button"
            style={{ padding: "5px", marginLeft: "20px" }}
          >
            X
          </span>
        </label>
      </div>
    );
  };
  
  export default TaskItem;