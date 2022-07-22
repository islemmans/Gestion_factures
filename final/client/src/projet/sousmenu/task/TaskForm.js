import { useState } from "react";
import Axios from 'axios';
import Button from '@mui/material/Button';

  const TaskForm = (props) => {
  const [nomdossier, setnomdossier] = useState("");
  const handleSubmit = (event) => {
  event.preventDefault();
  props.addTask(nomdossier);
  setnomdossier("");
  };
  return (
    <form onSubmit={(handleSubmit)}>
      <input
        type="text"
        placeholder="Nom dossier"
        value={nomdossier}
        onChange={(e) => setnomdossier(e.target.value)}
      />
      <Button onClick={(handleSubmit)}>ajouter</Button>
    </form>
  );
};

export default TaskForm;