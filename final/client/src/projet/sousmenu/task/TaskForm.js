import { useState } from "react";
import Button from '@mui/material/Button';
const TaskForm = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addTask(text);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom dossier"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleSubmit}>ajouter</Button>
    </form>
  );
};

export default TaskForm;