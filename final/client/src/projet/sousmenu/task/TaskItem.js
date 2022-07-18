import Button from '@mui/material/Button';

const TaskItem = (props) => {
    const { task, toggleTask, deleteTask } = props;
  
    return (
      <div>
        <label>
         
          {task.text}
  
          <Button
            onClick={() => deleteTask(task.id)}

            style={{ padding: "5px", marginLeft: "180px" }}
          >
            Supprimer
        </Button>
        </label>
      </div>
    );
  };
  
  export default TaskItem;